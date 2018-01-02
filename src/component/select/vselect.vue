<template>
  <div :dir="dir" class="dropdown v-select" :class="dropdownClasses">
    <div ref="toggle" @mousedown.prevent="toggleDropdown" :class="['dropdown-toggle', 'clearfix']">

      <span class="selected-tag" v-for="option in valueAsArray" :key="option.index">
        <slot name="selected-option" v-bind="option">
          {{ getOptionLabel(option) }}
        </slot>
        <button v-if="multiple" :disabled="disabled" @click="deselect(option)"
                type="button" class="close" aria-label="Remove option">
          <span aria-hidden="true">&times;</span>
        </button>
      </span>

      <input
              ref="search"
              v-model="search"
              @keydown.delete="maybeDeleteValue"
              @keyup.esc="onEscape"
              @keydown.up.prevent="typeAheadUp"
              @keydown.down.prevent="typeAheadDown"
              @keydown.enter.prevent="typeAheadSelect"
              @blur="onSearchBlur"
              @focus="onSearchFocus"
              type="search"
              class="form-control"
              autocomplete="false"
              :disabled="disabled"
              :placeholder="searchPlaceholder"
              :tabindex="tabindex"
              :readonly="!searchable"
              :style="{ width: isValueEmpty ? '100%' : 'auto' }"
              :id="inputId"
              aria-label="Search for option"
      >

      <i v-if="!noDrop" ref="openIndicator" role="presentation" class="open-indicator"></i>

      <slot name="spinner">
        <div class="spinner" v-show="mutableLoading">Loading...</div>
      </slot>
    </div>

    <transition :name="transition">
      <ul ref="dropdownMenu" v-if="dropdownOpen" class="dropdown-menu" :style="{ 'max-height': maxHeight }">
        <li v-for="(option, index) in filteredOptions" :key="index"
            :class="{ active: isOptionSelected(option), highlight: index === typeAheadPointer }"
            @mouseover="typeAheadPointer = index">
          <a @mousedown.prevent="select(option)">
          <slot name="option" v-bind="option">
            {{ getOptionLabel(option) }}
          </slot>
          </a>
        </li>
        <li v-if="!filteredOptions.length" class="no-options">
          <slot name="no-options">Sorry, no matching options.</slot>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script type="text/babel">

  export default {

    props: {
      /**
       * Contains the currently selected value. Very similar to a
       * `value` attribute on an <input>. You can listen for changes
       * using 'change' event using v-on
       * @type {Object||String||null}
       */
      value: {
        default: null
      },

      /**
       * An array of strings or objects to be used as dropdown choices.
       * If you are using an array of objects, vue-select will look for
       * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
       * custom label key can be set with the `label` prop.
       * @type {Array}
       */
      options: {
        type: Array,
        default() {
          return []
        },
      },

      /**
       * Disable the entire component.
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        default: false
      },

      /**
       * Sets the max-height property on the dropdown list.
       * @deprecated
       * @type {String}
       */
      maxHeight: {
        type: String,
        default: '400px'
      },

      /**
       * Enable/disable filtering the options.
       * @type {Boolean}
       */
      searchable: {
        type: Boolean,
        default: true
      },

      /**
       * Equivalent to the `multiple` attribute on a `<select>` input.
       * @type {Boolean}
       */
      multiple: {
        type: Boolean,
        default: false
      },

      /**
       * Equivalent to the `placeholder` attribute on an `<input>`.
       * @type {String}
       */
      placeholder: {
        type: String,
        default: ''
      },

      /**
       * Sets a Vue transition property on the `.dropdown-menu`. vue-select
       * does not include CSS for transitions, you'll need to add them yourself.
       * @type {String}
       */
      transition: {
        type: String,
        default: 'fade'
      },

      /**
       * Enables/disables clearing the search text when an option is selected.
       * @type {Boolean}
       */
      clearSearchOnSelect: {
        type: Boolean,
        default: true
      },

      /**
       * Close a dropdown when an option is chosen. Set to false to keep the dropdown
       * open (useful when combined with multi-select, for example)
       * @type {Boolean}
       */
      closeOnSelect: {
        type: Boolean,
        default: true
      },

      /**
       * Tells vue-select what key to use when generating option
       * labels when each `option` is an object.
       * @type {String}
       */
      label: {
        type: String,
        default: 'label'
      },

      /**
       * Callback to generate the label text. If {option}
       * is an object, returns option[this.label] by default.
       * @type {Function}
       * @param  {Object || String} option
       * @return {String}
       */
      getOptionLabel: {
        type: Function,
        default(option) {
          if (typeof option === 'object') {
            if (this.label && option[this.label]) {
              return option[this.label]
            }
          }
          return option;
        }
      },

      /**
       * An optional callback function that is called each time the selected
       * value(s) change. When integrating with Vuex, use this callback to trigger
       * an action, rather than using :value.sync to retreive the selected value.
       * @type {Function}
       * @param {Object || String} val
       */
      onChange: {
        type: Function,
        default: function (val) {
          this.$emit('input', val)
        }
      },

      /**
       * Enable/disable creating options from searchInput.
       * @type {Boolean}
       */
      taggable: {
        type: Boolean,
        default: false
      },

      /**
       * Set the tabindex for the input field.
       * @type {Number}
       */
      tabindex: {
        type: Number,
        default: null
      },

      /**
       * When true, newly created tags will be added to
       * the options list.
       * @type {Boolean}
       */
      pushTags: {
        type: Boolean,
        default: false
      },

      /**
       * When true, existing options will be filtered
       * by the search text. Should not be used in conjunction
       * with taggable.
       * @type {Boolean}
       */
      filterable: {
        type: Boolean,
        default: true
      },

      /**
       * User defined function for adding Options
       * @type {Function}
       */
      createOption: {
        type: Function,
        default(newOption) {
          if (typeof this.mutableOptions[0] === 'object') {
            newOption = {[this.label]: newOption}
          }
          this.$emit('option:created', newOption)
          return newOption
        }
      },

      /**
       * When false, updating the options will not reset the select value
       * @type {Boolean}
       */
      resetOnOptionsChange: {
        type: Boolean,
        default: false
      },

      /**
       * Disable the dropdown entirely.
       * @type {Boolean}
       */
      noDrop: {
        type: Boolean,
        default: false
      },

      /**
       * Sets the id of the input element.
       * @type {String}
       * @default {null}
       */
      inputId: {
        type: String
      },

      /**
       * Sets RTL support. Accepts 'ltr', 'rtl', 'auto'.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
       * @type {String}
       * @default 'auto'
       */
      dir: {
        type: String,
        default: 'auto'
      },


        /**
         * Toggles the adding of a 'loading' class to the main
         * .v-select wrapper. Useful to control UI state when
         * results are being processed through AJAX.
         */
        loading: {
            type: Boolean,
            default: false
        },

        /**
         * Accept a callback function that will be
         * run when the search text changes.
         *
         * loading() accepts a boolean value, and can
         * be used to toggle a loading class from
         * the onSearch callback.
         *
         * @param {search}  String          Current search text
         * @param {loading} Function(bool)  Toggle loading class
         */
        onSearch: {
            type: Function,
            default: function(search, loading){}
        }
    },

    data() {
      return {
        search: '',
        open: false,
        mutableValue: null,
        mutableOptions: [],

          typeAheadPointer: -1,
          mutableLoading: false,
      }
    },

    watch: {
      /**
       * When the value prop changes, update
			 * the internal mutableValue.
       * @param  {mixed} val
       * @return {void}
       */
      value(val) {
				this.mutableValue = val
      },

      /**
       * Maybe run the onChange callback.
       * @param  {string|object} val
       * @param  {string|object} old
       * @return {void}
       */
			mutableValue(val, old) {
        if (this.multiple) {
          this.onChange ? this.onChange(val) : null
        } else {
          this.onChange && val !== old ? this.onChange(val) : null
        }
      },

      /**
       * When options change, update
       * the internal mutableOptions.
       * @param  {array} val
       * @return {void}
       */
      options(val) {
        this.mutableOptions = val
      },

      /**
			 * Maybe reset the mutableValue
       * when mutableOptions change.
       * @return {[type]} [description]
       */
      mutableOptions() {
        if (!this.taggable && this.resetOnOptionsChange) {
					this.mutableValue = this.multiple ? [] : null
        }
      },

      /**
			 * Always reset the mutableValue when
       * the multiple prop changes.
       * @param  {Boolean} val
       * @return {void}
       */
      multiple(val) {
				this.mutableValue = val ? [] : null
      },



        filteredOptions() {
            this.typeAheadPointer = 0
        },

        typeAheadPointer() {
            this.maybeAdjustScroll()
        },


        search() {
            if (this.search.length > 0) {
                this.onSearch(this.search, this.toggleLoading)
                this.$emit('search', this.search, this.toggleLoading)
            }
        },
        /**
         * Sync the loading prop with the internal
         * mutable loading value.
         * @param val
         */
        loading(val) {
            this.mutableLoading = val
        }

    },

    /**
     * Clone props into mutable values,
     * attach any event listeners.
     */
    created() {
			this.mutableValue = this.value
      this.mutableOptions = this.options.slice(0)
			this.mutableLoading = this.loading

      this.$on('option:created', this.maybePushTag)
    },

    methods: {

      /**
       * Select a given option.
       * @param  {Object|String} option
       * @return {void}
       */
      select(option) {
        if (this.isOptionSelected(option)) {
          this.deselect(option)
        } else {
          if (this.taggable && !this.optionExists(option)) {
            option = this.createOption(option)
          }

          if (this.multiple && !this.mutableValue) {
            this.mutableValue = [option]
          } else if (this.multiple) {
            this.mutableValue.push(option)
          } else {
            this.mutableValue = option
          }
        }

        this.onAfterSelect(option)
      },

      /**
       * De-select a given option.
       * @param  {Object|String} option
       * @return {void}
       */
      deselect(option) {
        if (this.multiple) {
          let ref = -1
          this.mutableValue.forEach((val) => {
            if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {
              ref = val
            }
          })
          var index = this.mutableValue.indexOf(ref)
          this.mutableValue.splice(index, 1)
        } else {
          this.mutableValue = null
        }
      },

      /**
       * Called from this.select after each selection.
       * @param  {Object|String} option
       * @return {void}
       */
      onAfterSelect(option) {
        if (this.closeOnSelect) {
          this.open = !this.open
          this.$refs.search.blur()
        }

        if (this.clearSearchOnSelect) {
          this.search = ''
        }
      },

      /**
       * Toggle the visibility of the dropdown menu.
       * @param  {Event} e
       * @return {void}
       */
      toggleDropdown(e) {
        if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {
          if (this.open) {
            this.$refs.search.blur() // dropdown will close on blur
          } else {
            if (!this.disabled) {
              this.open = true
              this.$refs.search.focus()
            }
          }
        }
      },

      /**
       * Check if the given option is currently selected.
       * @param  {Object|String}  option
       * @return {Boolean}        True when selected | False otherwise
       */
      isOptionSelected(option) {
        if (this.multiple && this.mutableValue) {
          let selected = false
          this.mutableValue.forEach(opt => {
            if (typeof opt === 'object' && opt[this.label] === option[this.label]) {
              selected = true
            } else if (typeof opt === 'object' && opt[this.label] === option) {
              selected = true
            }
            else if (opt === option) {
              selected = true
            }
          })
          return selected
        }

        return this.mutableValue === option
      },

      /**
       * If there is any text in the search input, remove it.
       * Otherwise, blur the search input to close the dropdown.
       * @return {void}
       */
      onEscape() {
        if (!this.search.length) {
          this.$refs.search.blur()
        } else {
          this.search = ''
        }
      },

      /**
       * Close the dropdown on blur.
       * @emits  {search:blur}
       * @return {void}
       */
      onSearchBlur() {
        if (this.clearSearchOnBlur) {
          this.search = ''
        }
        this.open = false
        this.$emit('search:blur')
      },

      /**
       * Open the dropdown on focus.
       * @emits  {search:focus}
       * @return {void}
       */
      onSearchFocus() {
        this.open = true
        this.$emit('search:focus')
      },

      /**
       * Delete the value on Delete keypress when there is no
       * text in the search input, & there's tags to delete
       * @return {this.value}
       */
      maybeDeleteValue() {
        if (!this.$refs.search.value.length && this.mutableValue) {
          return this.multiple ? this.mutableValue.pop() : this.mutableValue = null
        }
      },

      /**
       * Determine if an option exists
       * within this.mutableOptions array.
       *
       * @param  {Object || String} option
       * @return {boolean}
       */
      optionExists(option) {
        let exists = false

        this.mutableOptions.forEach(opt => {
          if (typeof opt === 'object' && opt[this.label] === option) {
            exists = true
          } else if (opt === option) {
            exists = true
          }
        })

        return exists
      },

      /**
       * If push-tags is true, push the
       * given option to mutableOptions.
       *
       * @param  {Object || String} option
       * @return {void}
       */
      maybePushTag(option) {
        if (this.pushTags) {
          this.mutableOptions.push(option)
        }
      },



        /**
         * Move the typeAheadPointer visually up the list by
         * subtracting the current index by one.
         * @return {void}
         */
        typeAheadUp() {
            if (this.typeAheadPointer > 0) {
                this.typeAheadPointer--
                if( this.maybeAdjustScroll ) {
                    this.maybeAdjustScroll()
                }
            }
        },

        /**
         * Move the typeAheadPointer visually down the list by
         * adding the current index by one.
         * @return {void}
         */
        typeAheadDown() {
            if (this.typeAheadPointer < this.filteredOptions.length - 1) {
                this.typeAheadPointer++
                if( this.maybeAdjustScroll ) {
                    this.maybeAdjustScroll()
                }
            }
        },

        /**
         * Select the option at the current typeAheadPointer position.
         * Optionally clear the search input on selection.
         * @return {void}
         */
        typeAheadSelect() {
            if( this.filteredOptions[ this.typeAheadPointer ] ) {
                this.select( this.filteredOptions[ this.typeAheadPointer ] );
            } else if (this.taggable && this.search.length){
                this.select(this.search)
            }

            if( this.clearSearchOnSelect ) {
                this.search = "";
            }
        },


        /**
         * Adjust the scroll position of the dropdown list
         * if the current pointer is outside of the
         * overflow bounds.
         * @returns {*}
         */
        maybeAdjustScroll() {
            let pixelsToPointerTop = this.pixelsToPointerTop()
            let pixelsToPointerBottom = this.pixelsToPointerBottom()

            if ( pixelsToPointerTop <= this.viewport().top) {
                return this.scrollTo( pixelsToPointerTop )
            } else if (pixelsToPointerBottom >= this.viewport().bottom) {
                return this.scrollTo( this.viewport().top + this.pointerHeight() )
            }
        },

        /**
         * The distance in pixels from the top of the dropdown
         * list to the top of the current pointer element.
         * @returns {number}
         */
        pixelsToPointerTop() {
            let pixelsToPointerTop = 0
            if( this.$refs.dropdownMenu ) {
                for (let i = 0; i < this.typeAheadPointer; i++) {
                    pixelsToPointerTop += this.$refs.dropdownMenu.children[i].offsetHeight
                }
            }
            return pixelsToPointerTop
        },

        /**
         * The distance in pixels from the top of the dropdown
         * list to the bottom of the current pointer element.
         * @returns {*}
         */
        pixelsToPointerBottom() {
            return this.pixelsToPointerTop() + this.pointerHeight()
        },

        /**
         * The offsetHeight of the current pointer element.
         * @returns {number}
         */
        pointerHeight() {
            let element = this.$refs.dropdownMenu ? this.$refs.dropdownMenu.children[this.typeAheadPointer] : false
            return element ? element.offsetHeight : 0
        },

        /**
         * The currently viewable portion of the dropdownMenu.
         * @returns {{top: (string|*|number), bottom: *}}
         */
        viewport() {
            return {
                top: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop: 0,
                bottom: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop : 0
            }
        },

        /**
         * Scroll the dropdownMenu to a given position.
         * @param position
         * @returns {*}
         */
        scrollTo(position) {
            return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop = position : null
        },


        toggleLoading(toggle = null) {
            if (toggle == null) {
                return this.mutableLoading = !this.mutableLoading
            }
            return this.mutableLoading = toggle
        }
    },

    computed: {

      /**
       * Classes to be output on .dropdown
       * @return {Object}
       */
      dropdownClasses() {
        return {
          open: this.dropdownOpen,
          single: !this.multiple,
          searching: this.searching,
          searchable: this.searchable,
          unsearchable: !this.searchable,
          loading: this.mutableLoading,
          rtl: this.dir === 'rtl',
          disabled: this.disabled
        }
      },

      /**
       * If search text should clear on blur
       * @return {Boolean} True when single and clearSearchOnSelect
       */
      clearSearchOnBlur() {
        return this.clearSearchOnSelect && !this.multiple
      },

      /**
       * Return the current state of the
       * search input
       * @return {Boolean} True if non empty value
       */
      searching() {
        return !!this.search
      },

      /**
       * Return the current state of the
       * dropdown menu.
       * @return {Boolean} True if open
       */
      dropdownOpen() {
        return this.noDrop ? false : this.open && !this.mutableLoading
      },

      /**
       * Return the placeholder string if it's set
       * & there is no value selected.
       * @return {String} Placeholder text
       */
      searchPlaceholder() {
        if (this.isValueEmpty && this.placeholder) {
          return this.placeholder;
        }
      },

      /**
       * The currently displayed options, filtered
       * by the search elements value. If tagging
       * true, the search text will be prepended
       * if it doesn't already exist.
       *
       * @return {array}
       */
      filteredOptions() {
        if (!this.filterable && !this.taggable) {
          return this.mutableOptions.slice()
        }
        let options = this.mutableOptions.filter((option) => {
          if (typeof option === 'object' && option.hasOwnProperty(this.label)) {
            return option[this.label].toLowerCase().indexOf(this.search.toLowerCase()) > -1
          } else if (typeof option === 'object' && !option.hasOwnProperty(this.label)) {
            return console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels`)
          }
          return option.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
        if (this.taggable && this.search.length && !this.optionExists(this.search)) {
          options.unshift(this.search)
        }
        return options
      },

      /**
       * Check if there aren't any options selected.
       * @return {Boolean}
       */
      isValueEmpty() {
        if (this.mutableValue) {
          if (typeof this.mutableValue === 'object') {
            return !Object.keys(this.mutableValue).length
          }
          return !this.mutableValue.length
        }

        return true;
      },

      /**
       * Return the current value in array format.
       * @return {Array}
       */
      valueAsArray() {
        if (this.multiple) {
          return this.mutableValue
        } else if (this.mutableValue) {
          return [this.mutableValue]
        }

        return []
      }
    },

  }
</script>

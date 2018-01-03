<template>
	<div class="view-stars" :class="{readonly:readonly,notouch:notouch}" ref="ratingEl">
		<input type="radio" :id="stars_id+'0'" :checked="value===0" :name="stars_id" value="0">
		<template v-for="x in max">
			<label :for="stars_id+x" :key="'l'+x">
                <span class="active">{{ getActiveLabel(x) }}</span>
                <span class="inactive">{{ getInactiveLabel(x) }}</span>
            </label>
            <input :key="'i'+x" type="radio"
				@change="updateInput($event.target.value)"
				:checked="value===x" :id="stars_id+x" :name="stars_id" :disabled="readonly" :value="x">
		</template>
	</div>
</template>
<script>
export default {
	name: "VueStars",
	props: {
		max: { type: Number, required: false, default: 5 },
		value: { type: Number, required: false, default: 0 },
		char: { type: String, required: false, default: "★" },
		inactiveChar: { type: String, required: false, default: null },
		readonly: { type: Boolean, required: false, default: false },
		activeColor: { type: String, required: false, default: "#FD0" },
		inactiveColor: { type: String, required: false, default: "#999" },
		shadowColor: { type: String, required: false, default: "#FF0" },
		hoverColor: { type: String, required: false, default: "#DD0" },
	},
    data() {
        return {
            stars_id: 'view-stars-' + Math.random().toString(36).substring(3, 6),
        }
    },
	computed: {
		ratingChars() {
			return Array.from(this.char)
		},
		inactiveRatingChars() {
			/* Default to ratingChars if no inactive characters have been provided */
			return this.inactiveChar
				? Array.from(this.inactiveChar)
				: this.ratingChars
		},
		notouch() {
			/* For iPhone specifically but really any touch device, there is no true hover state, disabled any pseudo-hover activity. */
			return !("ontouchstart" in document.documentElement)
		},

        classes () {
            return [
                {
                    [`readonly`]: this.readonly,
                    [`notouch`]: this.notouch,
                    [`${this.activeColor}`]: !!this.activeColor
                }
            ];
        },
	},
	watch: {
		activeColor() {
			this.setColors()
		},
		shadowColor() {
			this.setColors()
		},
		hoverColor() {
			this.setColors()
		},
	},
	mounted: function() {
		this.setColors()
	},
	methods: {
		updateInput(v) {
			this.$emit("input", parseInt(v, 10))
		},
		getActiveLabel(x) {
			const s = this.ratingChars
			return s[Math.min(s.length - 1, x - 1)]
		},
		getInactiveLabel(x) {
			const s = this.inactiveRatingChars
			return s[Math.min(s.length - 1, x - 1)]
		},
		setColors() {
			const s = this.$refs.ratingEl.style;
			s.setProperty("view-stars-active-color", this.activeColor);
			s.setProperty("view-stars-inactive-color", this.inactiveColor);
			s.setProperty("view-stars-shadow-color", this.shadowColor);
			s.setProperty("view-stars-hover-color", this.hoverColor);
		},
	},
}
</script>
<style>
.view-stars {
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	line-height: 1em;
}

.view-stars label {
	display: block;
	padding: 0.125em;
	width: 1.2em;
	text-align: center;
	color: #fd0;
	text-shadow: 0 0 0.3em #ff0;
}

.view-stars input,
.view-stars label .inactive,
.view-stars input:checked ~ label .active,
.view-stars.notouch:not(.readonly):hover label .inactive,
.view-stars.notouch:not(.readonly) label:hover ~ label .active {
	display: none;
}

.view-stars input:checked ~ label .inactive,
.view-stars.notouch:not(.readonly):hover label .active,
.view-stars.notouch:not(.readonly) label:hover ~ label .inactive {
	display: inline;
}

.view-stars.notouch:not(.readonly):hover label {
	color: #dd0;
	text-shadow: 0 0 0.3em #ff0;
}

input:checked ~ label,
.view-stars.notouch:not(.readonly) label:hover ~ label {
	color: #999;
	text-shadow: none;
}
</style>

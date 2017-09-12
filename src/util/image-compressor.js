import MegaPixImage from './image-megapix';

//
let compressor = {

};

/*
 上,右,下,左
 6,1,8,3

 6  顺时针90度
 1  不动
 8  逆时针90
 3  180度
 */

compressor._render_image_to_blob = function (_file, _maxwidth, _maxheight, _quality, _orientation, callback) {
    console.log('_render_image_to_blob', _file.name, _maxwidth, _maxheight, _quality,  _orientation);

    //
    let config;
    if(!_orientation || _orientation=='' || _orientation==1) {
        config = { maxWidth: _maxwidth, quality: _quality };
    }
    else if(_orientation==3) {
        config = { maxWidth: _maxwidth, quality: _quality, orientation: _orientation };
    }
    else {
        config = { maxHeight: _maxheight, quality: _quality, orientation: _orientation };
    }
    console.log('config '+ JSON.stringify(config));

    //
    var mpImg = new MegaPixImage(_file);
    //
    mpImg.render(null, config, null, function (blob, dataurl) {
        console.log('blob', blob.size, 'dataurl', dataurl.length, 'file', _file.size, 'orie', _orientation);
        if(callback) callback(blob);
    });
};

compressor._render_image_to_element = function (_file, _maxwidth, _maxheight, _quality, _orientation, _elementids) {
    console.log('_render_image_to_element', _file.name, _maxwidth, _maxheight, _quality,  _orientation, _elementids);

    //
    let config;
    if(!_orientation || _orientation=='' || _orientation==1) {
        config = { maxWidth: _maxwidth, quality: _quality };
    }
    else if(_orientation==3) {
        config = { maxWidth: _maxwidth, quality: _quality, orientation: _orientation };
    }
    else {
        config = { maxHeight: _maxheight, quality: _quality, orientation: _orientation };
    }
    console.log('config '+ JSON.stringify(config));

    //
    var mpImg = new MegaPixImage(_file);
    for(let i=0; i<_elementids.length; i++) {
        mpImg.render(document.getElementById(_elementids[i]), config);
    }
};


export default compressor;




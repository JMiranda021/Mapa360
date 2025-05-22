var size = 0;
var placement = 'point';
function categories_Primavera_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Carne e derivados':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.033203125,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/carne_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fruta':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.033203125,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/fruta_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hortícolas':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.033203125,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/hortícolas cores i_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mel':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [512, 512],
                  scale: 0.033203125,
                  anchor: [256.0, 256.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/mel_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ovos':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [546.1333, 546.1333],
                  scale: 0.03112793158739817,
                  anchor: [273.06665, 273.06665],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ovos_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vinho':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [546.1333, 546.1333],
                  scale: 0.03112793158739817,
                  anchor: [273.06665, 273.06665],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/vinho_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Primavera_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Categoria");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Primavera_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

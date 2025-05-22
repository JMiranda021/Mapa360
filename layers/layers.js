ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-47718.850273, 168567.608085, 48622.200679, 221938.360743]);
var wms_layers = [];

var format_Freg_Guimaraes_0 = new ol.format.GeoJSON();
var features_Freg_Guimaraes_0 = format_Freg_Guimaraes_0.readFeatures(json_Freg_Guimaraes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Freg_Guimaraes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freg_Guimaraes_0.addFeatures(features_Freg_Guimaraes_0);
var lyr_Freg_Guimaraes_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freg_Guimaraes_0, 
                style: style_Freg_Guimaraes_0,
                popuplayertitle: 'Freg_Guimaraes',
                interactive: false,
                title: '<img src="styles/legend/Freg_Guimaraes_0.png" /> Freg_Guimaraes'
            });
var format_Produobiolgica_1 = new ol.format.GeoJSON();
var features_Produobiolgica_1 = format_Produobiolgica_1.readFeatures(json_Produobiolgica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Produobiolgica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Produobiolgica_1.addFeatures(features_Produobiolgica_1);
var lyr_Produobiolgica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Produobiolgica_1, 
                style: style_Produobiolgica_1,
                popuplayertitle: 'Produção biológica',
                interactive: true,
                title: '<img src="styles/legend/Produobiolgica_1.png" /> Produção biológica'
            });
var format_Produointegrada_2 = new ol.format.GeoJSON();
var features_Produointegrada_2 = format_Produointegrada_2.readFeatures(json_Produointegrada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Produointegrada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Produointegrada_2.addFeatures(features_Produointegrada_2);
var lyr_Produointegrada_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Produointegrada_2, 
                style: style_Produointegrada_2,
                popuplayertitle: 'Produção integrada',
                interactive: true,
                title: '<img src="styles/legend/Produointegrada_2.png" /> Produção integrada'
            });
var format_GlobalGAP_3 = new ol.format.GeoJSON();
var features_GlobalGAP_3 = format_GlobalGAP_3.readFeatures(json_GlobalGAP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_GlobalGAP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalGAP_3.addFeatures(features_GlobalGAP_3);
var lyr_GlobalGAP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalGAP_3, 
                style: style_GlobalGAP_3,
                popuplayertitle: 'Global GAP',
                interactive: true,
                title: '<img src="styles/legend/GlobalGAP_3.png" /> Global GAP'
            });
var format_Inverno_4 = new ol.format.GeoJSON();
var features_Inverno_4 = format_Inverno_4.readFeatures(json_Inverno_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Inverno_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inverno_4.addFeatures(features_Inverno_4);
var lyr_Inverno_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inverno_4, 
                style: style_Inverno_4,
                popuplayertitle: 'Inverno',
                interactive: true,
    title: 'Inverno<br />\
    <img src="styles/legend/Inverno_4_0.png" /> Carne e derivados<br />\
    <img src="styles/legend/Inverno_4_1.png" /> Fruta<br />\
    <img src="styles/legend/Inverno_4_2.png" /> Hortícolas<br />\
    <img src="styles/legend/Inverno_4_3.png" /> Mel<br />\
    <img src="styles/legend/Inverno_4_4.png" /> Ovos<br />\
    <img src="styles/legend/Inverno_4_5.png" /> Vinho<br />' });
var format_Outono_5 = new ol.format.GeoJSON();
var features_Outono_5 = format_Outono_5.readFeatures(json_Outono_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Outono_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outono_5.addFeatures(features_Outono_5);
var lyr_Outono_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outono_5, 
                style: style_Outono_5,
                popuplayertitle: 'Outono',
                interactive: true,
    title: 'Outono<br />\
    <img src="styles/legend/Outono_5_0.png" /> Carne e derivados<br />\
    <img src="styles/legend/Outono_5_1.png" /> Fruta<br />\
    <img src="styles/legend/Outono_5_2.png" /> Hortícolas<br />\
    <img src="styles/legend/Outono_5_3.png" /> Mel<br />\
    <img src="styles/legend/Outono_5_4.png" /> Ovos<br />\
    <img src="styles/legend/Outono_5_5.png" /> Vinho<br />' });
var format_Primavera_6 = new ol.format.GeoJSON();
var features_Primavera_6 = format_Primavera_6.readFeatures(json_Primavera_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Primavera_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primavera_6.addFeatures(features_Primavera_6);
var lyr_Primavera_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primavera_6, 
                style: style_Primavera_6,
                popuplayertitle: 'Primavera',
                interactive: true,
    title: 'Primavera<br />\
    <img src="styles/legend/Primavera_6_0.png" /> Carne e derivados<br />\
    <img src="styles/legend/Primavera_6_1.png" /> Fruta<br />\
    <img src="styles/legend/Primavera_6_2.png" /> Hortícolas<br />\
    <img src="styles/legend/Primavera_6_3.png" /> Mel<br />\
    <img src="styles/legend/Primavera_6_4.png" /> Ovos<br />\
    <img src="styles/legend/Primavera_6_5.png" /> Vinho<br />' });
var format_Vero_7 = new ol.format.GeoJSON();
var features_Vero_7 = format_Vero_7.readFeatures(json_Vero_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Vero_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vero_7.addFeatures(features_Vero_7);
var lyr_Vero_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vero_7, 
                style: style_Vero_7,
                popuplayertitle: 'Verão',
                interactive: true,
    title: 'Verão<br />\
    <img src="styles/legend/Vero_7_0.png" /> Carne e derivados<br />\
    <img src="styles/legend/Vero_7_1.png" /> Fruta<br />\
    <img src="styles/legend/Vero_7_2.png" /> Hortícolas<br />\
    <img src="styles/legend/Vero_7_3.png" /> Mel<br />\
    <img src="styles/legend/Vero_7_4.png" /> Ovos<br />\
    <img src="styles/legend/Vero_7_5.png" /> Vinho<br />' });
var format_Ovos_8 = new ol.format.GeoJSON();
var features_Ovos_8 = format_Ovos_8.readFeatures(json_Ovos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Ovos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ovos_8.addFeatures(features_Ovos_8);
var lyr_Ovos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ovos_8, 
                style: style_Ovos_8,
                popuplayertitle: 'Ovos',
                interactive: true,
                title: '<img src="styles/legend/Ovos_8.png" /> Ovos'
            });
var format_Mel_9 = new ol.format.GeoJSON();
var features_Mel_9 = format_Mel_9.readFeatures(json_Mel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Mel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mel_9.addFeatures(features_Mel_9);
var lyr_Mel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mel_9, 
                style: style_Mel_9,
                popuplayertitle: 'Mel',
                interactive: true,
                title: '<img src="styles/legend/Mel_9.png" /> Mel'
            });
var format_Vinhoverde_10 = new ol.format.GeoJSON();
var features_Vinhoverde_10 = format_Vinhoverde_10.readFeatures(json_Vinhoverde_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Vinhoverde_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinhoverde_10.addFeatures(features_Vinhoverde_10);
var lyr_Vinhoverde_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vinhoverde_10, 
                style: style_Vinhoverde_10,
                popuplayertitle: 'Vinho verde',
                interactive: true,
                title: '<img src="styles/legend/Vinhoverde_10.png" /> Vinho verde'
            });
var format_Vinhotinto_11 = new ol.format.GeoJSON();
var features_Vinhotinto_11 = format_Vinhotinto_11.readFeatures(json_Vinhotinto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Vinhotinto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinhotinto_11.addFeatures(features_Vinhotinto_11);
var lyr_Vinhotinto_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vinhotinto_11, 
                style: style_Vinhotinto_11,
                popuplayertitle: 'Vinho tinto',
                interactive: true,
                title: '<img src="styles/legend/Vinhotinto_11.png" /> Vinho tinto'
            });
var format_Vinhobranco_12 = new ol.format.GeoJSON();
var features_Vinhobranco_12 = format_Vinhobranco_12.readFeatures(json_Vinhobranco_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Vinhobranco_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinhobranco_12.addFeatures(features_Vinhobranco_12);
var lyr_Vinhobranco_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vinhobranco_12, 
                style: style_Vinhobranco_12,
                popuplayertitle: 'Vinho branco',
                interactive: true,
                title: '<img src="styles/legend/Vinhobranco_12.png" /> Vinho branco'
            });
var format_Vinho_13 = new ol.format.GeoJSON();
var features_Vinho_13 = format_Vinho_13.readFeatures(json_Vinho_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Vinho_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinho_13.addFeatures(features_Vinho_13);
var lyr_Vinho_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vinho_13, 
                style: style_Vinho_13,
                popuplayertitle: 'Vinho',
                interactive: true,
                title: '<img src="styles/legend/Vinho_13.png" /> Vinho'
            });
var format_Rose_14 = new ol.format.GeoJSON();
var features_Rose_14 = format_Rose_14.readFeatures(json_Rose_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Rose_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rose_14.addFeatures(features_Rose_14);
var lyr_Rose_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rose_14, 
                style: style_Rose_14,
                popuplayertitle: 'Rose',
                interactive: true,
                title: '<img src="styles/legend/Rose_14.png" /> Rose'
            });
var format_Loureiro_15 = new ol.format.GeoJSON();
var features_Loureiro_15 = format_Loureiro_15.readFeatures(json_Loureiro_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Loureiro_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loureiro_15.addFeatures(features_Loureiro_15);
var lyr_Loureiro_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loureiro_15, 
                style: style_Loureiro_15,
                popuplayertitle: 'Loureiro',
                interactive: true,
                title: '<img src="styles/legend/Loureiro_15.png" /> Loureiro'
            });
var format_Espumante_16 = new ol.format.GeoJSON();
var features_Espumante_16 = format_Espumante_16.readFeatures(json_Espumante_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Espumante_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espumante_16.addFeatures(features_Espumante_16);
var lyr_Espumante_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espumante_16, 
                style: style_Espumante_16,
                popuplayertitle: 'Espumante',
                interactive: true,
                title: '<img src="styles/legend/Espumante_16.png" /> Espumante'
            });
var format_Alvarinho_17 = new ol.format.GeoJSON();
var features_Alvarinho_17 = format_Alvarinho_17.readFeatures(json_Alvarinho_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Alvarinho_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alvarinho_17.addFeatures(features_Alvarinho_17);
var lyr_Alvarinho_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alvarinho_17, 
                style: style_Alvarinho_17,
                popuplayertitle: 'Alvarinho',
                interactive: true,
                title: '<img src="styles/legend/Alvarinho_17.png" /> Alvarinho'
            });
var format_Tremoo_18 = new ol.format.GeoJSON();
var features_Tremoo_18 = format_Tremoo_18.readFeatures(json_Tremoo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Tremoo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tremoo_18.addFeatures(features_Tremoo_18);
var lyr_Tremoo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tremoo_18, 
                style: style_Tremoo_18,
                popuplayertitle: 'Tremoço',
                interactive: true,
                title: '<img src="styles/legend/Tremoo_18.png" /> Tremoço'
            });
var format_Tomate_19 = new ol.format.GeoJSON();
var features_Tomate_19 = format_Tomate_19.readFeatures(json_Tomate_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Tomate_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tomate_19.addFeatures(features_Tomate_19);
var lyr_Tomate_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tomate_19, 
                style: style_Tomate_19,
                popuplayertitle: 'Tomate',
                interactive: true,
                title: '<img src="styles/legend/Tomate_19.png" /> Tomate'
            });
var format_Salsa_20 = new ol.format.GeoJSON();
var features_Salsa_20 = format_Salsa_20.readFeatures(json_Salsa_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Salsa_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salsa_20.addFeatures(features_Salsa_20);
var lyr_Salsa_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salsa_20, 
                style: style_Salsa_20,
                popuplayertitle: 'Salsa',
                interactive: true,
                title: '<img src="styles/legend/Salsa_20.png" /> Salsa'
            });
var format_Pimento_21 = new ol.format.GeoJSON();
var features_Pimento_21 = format_Pimento_21.readFeatures(json_Pimento_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Pimento_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimento_21.addFeatures(features_Pimento_21);
var lyr_Pimento_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pimento_21, 
                style: style_Pimento_21,
                popuplayertitle: 'Pimento',
                interactive: true,
                title: '<img src="styles/legend/Pimento_21.png" /> Pimento'
            });
var format_Pepino_22 = new ol.format.GeoJSON();
var features_Pepino_22 = format_Pepino_22.readFeatures(json_Pepino_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Pepino_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pepino_22.addFeatures(features_Pepino_22);
var lyr_Pepino_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pepino_22, 
                style: style_Pepino_22,
                popuplayertitle: 'Pepino',
                interactive: true,
                title: '<img src="styles/legend/Pepino_22.png" /> Pepino'
            });
var format_Penca_23 = new ol.format.GeoJSON();
var features_Penca_23 = format_Penca_23.readFeatures(json_Penca_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Penca_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penca_23.addFeatures(features_Penca_23);
var lyr_Penca_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penca_23, 
                style: style_Penca_23,
                popuplayertitle: 'Penca',
                interactive: true,
                title: '<img src="styles/legend/Penca_23.png" /> Penca'
            });
var format_Nabo_24 = new ol.format.GeoJSON();
var features_Nabo_24 = format_Nabo_24.readFeatures(json_Nabo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Nabo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nabo_24.addFeatures(features_Nabo_24);
var lyr_Nabo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nabo_24, 
                style: style_Nabo_24,
                popuplayertitle: 'Nabo',
                interactive: true,
                title: '<img src="styles/legend/Nabo_24.png" /> Nabo'
            });
var format_Nabia_25 = new ol.format.GeoJSON();
var features_Nabia_25 = format_Nabia_25.readFeatures(json_Nabia_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Nabia_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nabia_25.addFeatures(features_Nabia_25);
var lyr_Nabia_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nabia_25, 
                style: style_Nabia_25,
                popuplayertitle: 'Nabiça',
                interactive: true,
                title: '<img src="styles/legend/Nabia_25.png" /> Nabiça'
            });
var format_Milho_26 = new ol.format.GeoJSON();
var features_Milho_26 = format_Milho_26.readFeatures(json_Milho_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Milho_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Milho_26.addFeatures(features_Milho_26);
var lyr_Milho_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Milho_26, 
                style: style_Milho_26,
                popuplayertitle: 'Milho',
                interactive: true,
                title: '<img src="styles/legend/Milho_26.png" /> Milho'
            });
var format_Hortcolasdapoca_27 = new ol.format.GeoJSON();
var features_Hortcolasdapoca_27 = format_Hortcolasdapoca_27.readFeatures(json_Hortcolasdapoca_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Hortcolasdapoca_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hortcolasdapoca_27.addFeatures(features_Hortcolasdapoca_27);
var lyr_Hortcolasdapoca_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hortcolasdapoca_27, 
                style: style_Hortcolasdapoca_27,
                popuplayertitle: 'Hortícolas da época',
                interactive: true,
                title: '<img src="styles/legend/Hortcolasdapoca_27.png" /> Hortícolas da época'
            });
var format_Hortalia_28 = new ol.format.GeoJSON();
var features_Hortalia_28 = format_Hortalia_28.readFeatures(json_Hortalia_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Hortalia_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hortalia_28.addFeatures(features_Hortalia_28);
var lyr_Hortalia_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hortalia_28, 
                style: style_Hortalia_28,
                popuplayertitle: 'Hortaliça',
                interactive: true,
                title: '<img src="styles/legend/Hortalia_28.png" /> Hortaliça'
            });
var format_Grelos_29 = new ol.format.GeoJSON();
var features_Grelos_29 = format_Grelos_29.readFeatures(json_Grelos_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Grelos_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grelos_29.addFeatures(features_Grelos_29);
var lyr_Grelos_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grelos_29, 
                style: style_Grelos_29,
                popuplayertitle: 'Grelos',
                interactive: true,
                title: '<img src="styles/legend/Grelos_29.png" /> Grelos'
            });
var format_Feijovermelho_30 = new ol.format.GeoJSON();
var features_Feijovermelho_30 = format_Feijovermelho_30.readFeatures(json_Feijovermelho_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Feijovermelho_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feijovermelho_30.addFeatures(features_Feijovermelho_30);
var lyr_Feijovermelho_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feijovermelho_30, 
                style: style_Feijovermelho_30,
                popuplayertitle: 'Feijão vermelho',
                interactive: true,
                title: '<img src="styles/legend/Feijovermelho_30.png" /> Feijão vermelho'
            });
var format_Feijoverde_31 = new ol.format.GeoJSON();
var features_Feijoverde_31 = format_Feijoverde_31.readFeatures(json_Feijoverde_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Feijoverde_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feijoverde_31.addFeatures(features_Feijoverde_31);
var lyr_Feijoverde_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feijoverde_31, 
                style: style_Feijoverde_31,
                popuplayertitle: 'Feijão verde',
                interactive: true,
                title: '<img src="styles/legend/Feijoverde_31.png" /> Feijão verde'
            });
var format_Feijofrade_32 = new ol.format.GeoJSON();
var features_Feijofrade_32 = format_Feijofrade_32.readFeatures(json_Feijofrade_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Feijofrade_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feijofrade_32.addFeatures(features_Feijofrade_32);
var lyr_Feijofrade_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feijofrade_32, 
                style: style_Feijofrade_32,
                popuplayertitle: 'Feijão frade',
                interactive: true,
                title: '<img src="styles/legend/Feijofrade_32.png" /> Feijão frade'
            });
var format_Feijobranco_33 = new ol.format.GeoJSON();
var features_Feijobranco_33 = format_Feijobranco_33.readFeatures(json_Feijobranco_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Feijobranco_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feijobranco_33.addFeatures(features_Feijobranco_33);
var lyr_Feijobranco_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feijobranco_33, 
                style: style_Feijobranco_33,
                popuplayertitle: 'Feijão branco',
                interactive: true,
                title: '<img src="styles/legend/Feijobranco_33.png" /> Feijão branco'
            });
var format_Feijo_34 = new ol.format.GeoJSON();
var features_Feijo_34 = format_Feijo_34.readFeatures(json_Feijo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Feijo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feijo_34.addFeatures(features_Feijo_34);
var lyr_Feijo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feijo_34, 
                style: style_Feijo_34,
                popuplayertitle: 'Feijão',
                interactive: true,
                title: '<img src="styles/legend/Feijo_34.png" /> Feijão'
            });
var format_Fava_35 = new ol.format.GeoJSON();
var features_Fava_35 = format_Fava_35.readFeatures(json_Fava_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Fava_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fava_35.addFeatures(features_Fava_35);
var lyr_Fava_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fava_35, 
                style: style_Fava_35,
                popuplayertitle: 'Fava',
                interactive: true,
                title: '<img src="styles/legend/Fava_35.png" /> Fava'
            });
var format_Espinafre_36 = new ol.format.GeoJSON();
var features_Espinafre_36 = format_Espinafre_36.readFeatures(json_Espinafre_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Espinafre_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espinafre_36.addFeatures(features_Espinafre_36);
var lyr_Espinafre_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espinafre_36, 
                style: style_Espinafre_36,
                popuplayertitle: 'Espinafre',
                interactive: true,
                title: '<img src="styles/legend/Espinafre_36.png" /> Espinafre'
            });
var format_Espargos_37 = new ol.format.GeoJSON();
var features_Espargos_37 = format_Espargos_37.readFeatures(json_Espargos_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Espargos_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espargos_37.addFeatures(features_Espargos_37);
var lyr_Espargos_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espargos_37, 
                style: style_Espargos_37,
                popuplayertitle: 'Espargos',
                interactive: true,
                title: '<img src="styles/legend/Espargos_37.png" /> Espargos'
            });
var format_Ervilha_38 = new ol.format.GeoJSON();
var features_Ervilha_38 = format_Ervilha_38.readFeatures(json_Ervilha_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Ervilha_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ervilha_38.addFeatures(features_Ervilha_38);
var lyr_Ervilha_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ervilha_38, 
                style: style_Ervilha_38,
                popuplayertitle: 'Ervilha',
                interactive: true,
                title: '<img src="styles/legend/Ervilha_38.png" /> Ervilha'
            });
var format_Couvegalega_39 = new ol.format.GeoJSON();
var features_Couvegalega_39 = format_Couvegalega_39.readFeatures(json_Couvegalega_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Couvegalega_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couvegalega_39.addFeatures(features_Couvegalega_39);
var lyr_Couvegalega_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couvegalega_39, 
                style: style_Couvegalega_39,
                popuplayertitle: 'Couve galega',
                interactive: true,
                title: '<img src="styles/legend/Couvegalega_39.png" /> Couve galega'
            });
var format_Couveflor_40 = new ol.format.GeoJSON();
var features_Couveflor_40 = format_Couveflor_40.readFeatures(json_Couveflor_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Couveflor_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couveflor_40.addFeatures(features_Couveflor_40);
var lyr_Couveflor_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couveflor_40, 
                style: style_Couveflor_40,
                popuplayertitle: 'Couve flor',
                interactive: true,
                title: '<img src="styles/legend/Couveflor_40.png" /> Couve flor'
            });
var format_CouveCorao_41 = new ol.format.GeoJSON();
var features_CouveCorao_41 = format_CouveCorao_41.readFeatures(json_CouveCorao_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_CouveCorao_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CouveCorao_41.addFeatures(features_CouveCorao_41);
var lyr_CouveCorao_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CouveCorao_41, 
                style: style_CouveCorao_41,
                popuplayertitle: 'Couve Coração',
                interactive: true,
                title: '<img src="styles/legend/CouveCorao_41.png" /> Couve Coração'
            });
var format_Couve_42 = new ol.format.GeoJSON();
var features_Couve_42 = format_Couve_42.readFeatures(json_Couve_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Couve_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couve_42.addFeatures(features_Couve_42);
var lyr_Couve_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couve_42, 
                style: style_Couve_42,
                popuplayertitle: 'Couve ',
                interactive: true,
                title: '<img src="styles/legend/Couve_42.png" /> Couve '
            });
var format_Courgette_43 = new ol.format.GeoJSON();
var features_Courgette_43 = format_Courgette_43.readFeatures(json_Courgette_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Courgette_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courgette_43.addFeatures(features_Courgette_43);
var lyr_Courgette_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courgette_43, 
                style: style_Courgette_43,
                popuplayertitle: 'Courgette',
                interactive: true,
                title: '<img src="styles/legend/Courgette_43.png" /> Courgette'
            });
var format_Cogumeloshiitake_44 = new ol.format.GeoJSON();
var features_Cogumeloshiitake_44 = format_Cogumeloshiitake_44.readFeatures(json_Cogumeloshiitake_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Cogumeloshiitake_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogumeloshiitake_44.addFeatures(features_Cogumeloshiitake_44);
var lyr_Cogumeloshiitake_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogumeloshiitake_44, 
                style: style_Cogumeloshiitake_44,
                popuplayertitle: 'Cogumelo shiitake',
                interactive: true,
                title: '<img src="styles/legend/Cogumeloshiitake_44.png" /> Cogumelo shiitake'
            });
var format_Chuchu_45 = new ol.format.GeoJSON();
var features_Chuchu_45 = format_Chuchu_45.readFeatures(json_Chuchu_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Chuchu_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chuchu_45.addFeatures(features_Chuchu_45);
var lyr_Chuchu_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chuchu_45, 
                style: style_Chuchu_45,
                popuplayertitle: 'Chuchu',
                interactive: true,
                title: '<img src="styles/legend/Chuchu_45.png" /> Chuchu'
            });
var format_Cenoura_46 = new ol.format.GeoJSON();
var features_Cenoura_46 = format_Cenoura_46.readFeatures(json_Cenoura_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Cenoura_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cenoura_46.addFeatures(features_Cenoura_46);
var lyr_Cenoura_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cenoura_46, 
                style: style_Cenoura_46,
                popuplayertitle: 'Cenoura',
                interactive: true,
                title: '<img src="styles/legend/Cenoura_46.png" /> Cenoura'
            });
var format_Cebolo_47 = new ol.format.GeoJSON();
var features_Cebolo_47 = format_Cebolo_47.readFeatures(json_Cebolo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Cebolo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cebolo_47.addFeatures(features_Cebolo_47);
var lyr_Cebolo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cebolo_47, 
                style: style_Cebolo_47,
                popuplayertitle: 'Cebolo',
                interactive: true,
                title: '<img src="styles/legend/Cebolo_47.png" /> Cebolo'
            });
var format_Cebola_48 = new ol.format.GeoJSON();
var features_Cebola_48 = format_Cebola_48.readFeatures(json_Cebola_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Cebola_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cebola_48.addFeatures(features_Cebola_48);
var lyr_Cebola_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cebola_48, 
                style: style_Cebola_48,
                popuplayertitle: 'Cebola',
                interactive: true,
                title: '<img src="styles/legend/Cebola_48.png" /> Cebola'
            });
var format_Cabaa_49 = new ol.format.GeoJSON();
var features_Cabaa_49 = format_Cabaa_49.readFeatures(json_Cabaa_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Cabaa_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabaa_49.addFeatures(features_Cabaa_49);
var lyr_Cabaa_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cabaa_49, 
                style: style_Cabaa_49,
                popuplayertitle: 'Cabaça',
                interactive: true,
                title: '<img src="styles/legend/Cabaa_49.png" /> Cabaça'
            });
var format_Brcolo_50 = new ol.format.GeoJSON();
var features_Brcolo_50 = format_Brcolo_50.readFeatures(json_Brcolo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Brcolo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brcolo_50.addFeatures(features_Brcolo_50);
var lyr_Brcolo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brcolo_50, 
                style: style_Brcolo_50,
                popuplayertitle: 'Brócolo',
                interactive: true,
                title: '<img src="styles/legend/Brcolo_50.png" /> Brócolo'
            });
var format_Beringela_51 = new ol.format.GeoJSON();
var features_Beringela_51 = format_Beringela_51.readFeatures(json_Beringela_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Beringela_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beringela_51.addFeatures(features_Beringela_51);
var lyr_Beringela_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beringela_51, 
                style: style_Beringela_51,
                popuplayertitle: 'Beringela',
                interactive: true,
                title: '<img src="styles/legend/Beringela_51.png" /> Beringela'
            });
var format_Batata_52 = new ol.format.GeoJSON();
var features_Batata_52 = format_Batata_52.readFeatures(json_Batata_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Batata_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batata_52.addFeatures(features_Batata_52);
var lyr_Batata_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batata_52, 
                style: style_Batata_52,
                popuplayertitle: 'Batata',
                interactive: true,
                title: '<img src="styles/legend/Batata_52.png" /> Batata'
            });
var format_Alhofrancs_53 = new ol.format.GeoJSON();
var features_Alhofrancs_53 = format_Alhofrancs_53.readFeatures(json_Alhofrancs_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Alhofrancs_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alhofrancs_53.addFeatures(features_Alhofrancs_53);
var lyr_Alhofrancs_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alhofrancs_53, 
                style: style_Alhofrancs_53,
                popuplayertitle: 'Alho francês',
                interactive: true,
                title: '<img src="styles/legend/Alhofrancs_53.png" /> Alho francês'
            });
var format_Alface_54 = new ol.format.GeoJSON();
var features_Alface_54 = format_Alface_54.readFeatures(json_Alface_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Alface_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alface_54.addFeatures(features_Alface_54);
var lyr_Alface_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alface_54, 
                style: style_Alface_54,
                popuplayertitle: 'Alface',
                interactive: true,
                title: '<img src="styles/legend/Alface_54.png" /> Alface'
            });
var format_Agrio_55 = new ol.format.GeoJSON();
var features_Agrio_55 = format_Agrio_55.readFeatures(json_Agrio_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Agrio_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrio_55.addFeatures(features_Agrio_55);
var lyr_Agrio_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agrio_55, 
                style: style_Agrio_55,
                popuplayertitle: 'Agrião',
                interactive: true,
                title: '<img src="styles/legend/Agrio_55.png" /> Agrião'
            });
var format_Abrolho_56 = new ol.format.GeoJSON();
var features_Abrolho_56 = format_Abrolho_56.readFeatures(json_Abrolho_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Abrolho_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abrolho_56.addFeatures(features_Abrolho_56);
var lyr_Abrolho_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abrolho_56, 
                style: style_Abrolho_56,
                popuplayertitle: 'Abrolho',
                interactive: true,
                title: '<img src="styles/legend/Abrolho_56.png" /> Abrolho'
            });
var format_Abbora_57 = new ol.format.GeoJSON();
var features_Abbora_57 = format_Abbora_57.readFeatures(json_Abbora_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Abbora_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abbora_57.addFeatures(features_Abbora_57);
var lyr_Abbora_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abbora_57, 
                style: style_Abbora_57,
                popuplayertitle: 'Abóbora',
                interactive: true,
                title: '<img src="styles/legend/Abbora_57.png" /> Abóbora'
            });
var format_Uva_58 = new ol.format.GeoJSON();
var features_Uva_58 = format_Uva_58.readFeatures(json_Uva_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Uva_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uva_58.addFeatures(features_Uva_58);
var lyr_Uva_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uva_58, 
                style: style_Uva_58,
                popuplayertitle: 'Uva',
                interactive: true,
                title: '<img src="styles/legend/Uva_58.png" /> Uva'
            });
var format_Tangera_59 = new ol.format.GeoJSON();
var features_Tangera_59 = format_Tangera_59.readFeatures(json_Tangera_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Tangera_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tangera_59.addFeatures(features_Tangera_59);
var lyr_Tangera_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tangera_59, 
                style: style_Tangera_59,
                popuplayertitle: 'Tangera',
                interactive: true,
                title: '<img src="styles/legend/Tangera_59.png" /> Tangera'
            });
var format_Pssego_60 = new ol.format.GeoJSON();
var features_Pssego_60 = format_Pssego_60.readFeatures(json_Pssego_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Pssego_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pssego_60.addFeatures(features_Pssego_60);
var lyr_Pssego_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pssego_60, 
                style: style_Pssego_60,
                popuplayertitle: 'Pêssego',
                interactive: true,
                title: '<img src="styles/legend/Pssego_60.png" /> Pêssego'
            });
var format_Pra_61 = new ol.format.GeoJSON();
var features_Pra_61 = format_Pra_61.readFeatures(json_Pra_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Pra_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pra_61.addFeatures(features_Pra_61);
var lyr_Pra_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pra_61, 
                style: style_Pra_61,
                popuplayertitle: 'Pêra',
                interactive: true,
                title: '<img src="styles/legend/Pra_61.png" /> Pêra'
            });
var format_Noz_62 = new ol.format.GeoJSON();
var features_Noz_62 = format_Noz_62.readFeatures(json_Noz_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Noz_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noz_62.addFeatures(features_Noz_62);
var lyr_Noz_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noz_62, 
                style: style_Noz_62,
                popuplayertitle: 'Noz',
                interactive: true,
                title: '<img src="styles/legend/Noz_62.png" /> Noz'
            });
var format_Nspera_63 = new ol.format.GeoJSON();
var features_Nspera_63 = format_Nspera_63.readFeatures(json_Nspera_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Nspera_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nspera_63.addFeatures(features_Nspera_63);
var lyr_Nspera_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nspera_63, 
                style: style_Nspera_63,
                popuplayertitle: 'Nêspera',
                interactive: true,
                title: '<img src="styles/legend/Nspera_63.png" /> Nêspera'
            });
var format_Morango_64 = new ol.format.GeoJSON();
var features_Morango_64 = format_Morango_64.readFeatures(json_Morango_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Morango_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morango_64.addFeatures(features_Morango_64);
var lyr_Morango_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Morango_64, 
                style: style_Morango_64,
                popuplayertitle: 'Morango',
                interactive: true,
                title: '<img src="styles/legend/Morango_64.png" /> Morango'
            });
var format_Mirtilo_65 = new ol.format.GeoJSON();
var features_Mirtilo_65 = format_Mirtilo_65.readFeatures(json_Mirtilo_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Mirtilo_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirtilo_65.addFeatures(features_Mirtilo_65);
var lyr_Mirtilo_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mirtilo_65, 
                style: style_Mirtilo_65,
                popuplayertitle: 'Mirtilo',
                interactive: true,
                title: '<img src="styles/legend/Mirtilo_65.png" /> Mirtilo'
            });
var format_Meloa_66 = new ol.format.GeoJSON();
var features_Meloa_66 = format_Meloa_66.readFeatures(json_Meloa_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Meloa_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meloa_66.addFeatures(features_Meloa_66);
var lyr_Meloa_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meloa_66, 
                style: style_Meloa_66,
                popuplayertitle: 'Meloa',
                interactive: true,
                title: '<img src="styles/legend/Meloa_66.png" /> Meloa'
            });
var format_Ma_67 = new ol.format.GeoJSON();
var features_Ma_67 = format_Ma_67.readFeatures(json_Ma_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Ma_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ma_67.addFeatures(features_Ma_67);
var lyr_Ma_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ma_67, 
                style: style_Ma_67,
                popuplayertitle: 'Maçã',
                interactive: true,
                title: '<img src="styles/legend/Ma_67.png" /> Maçã'
            });
var format_Maracuj_68 = new ol.format.GeoJSON();
var features_Maracuj_68 = format_Maracuj_68.readFeatures(json_Maracuj_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Maracuj_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maracuj_68.addFeatures(features_Maracuj_68);
var lyr_Maracuj_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maracuj_68, 
                style: style_Maracuj_68,
                popuplayertitle: 'Maracujá',
                interactive: true,
                title: '<img src="styles/legend/Maracuj_68.png" /> Maracujá'
            });
var format_Limo_69 = new ol.format.GeoJSON();
var features_Limo_69 = format_Limo_69.readFeatures(json_Limo_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Limo_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limo_69.addFeatures(features_Limo_69);
var lyr_Limo_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limo_69, 
                style: style_Limo_69,
                popuplayertitle: 'Limão',
                interactive: true,
                title: '<img src="styles/legend/Limo_69.png" /> Limão'
            });
var format_Laranja_70 = new ol.format.GeoJSON();
var features_Laranja_70 = format_Laranja_70.readFeatures(json_Laranja_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Laranja_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laranja_70.addFeatures(features_Laranja_70);
var lyr_Laranja_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laranja_70, 
                style: style_Laranja_70,
                popuplayertitle: 'Laranja',
                interactive: true,
                title: '<img src="styles/legend/Laranja_70.png" /> Laranja'
            });
var format_kiwi_71 = new ol.format.GeoJSON();
var features_kiwi_71 = format_kiwi_71.readFeatures(json_kiwi_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_kiwi_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiwi_71.addFeatures(features_kiwi_71);
var lyr_kiwi_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiwi_71, 
                style: style_kiwi_71,
                popuplayertitle: 'kiwi',
                interactive: true,
                title: '<img src="styles/legend/kiwi_71.png" /> kiwi'
            });
var format_Groselha_72 = new ol.format.GeoJSON();
var features_Groselha_72 = format_Groselha_72.readFeatures(json_Groselha_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Groselha_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groselha_72.addFeatures(features_Groselha_72);
var lyr_Groselha_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groselha_72, 
                style: style_Groselha_72,
                popuplayertitle: 'Groselha',
                interactive: true,
                title: '<img src="styles/legend/Groselha_72.png" /> Groselha'
            });
var format_Frutadapoca_73 = new ol.format.GeoJSON();
var features_Frutadapoca_73 = format_Frutadapoca_73.readFeatures(json_Frutadapoca_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Frutadapoca_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frutadapoca_73.addFeatures(features_Frutadapoca_73);
var lyr_Frutadapoca_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frutadapoca_73, 
                style: style_Frutadapoca_73,
                popuplayertitle: 'Fruta da época',
                interactive: true,
                title: '<img src="styles/legend/Frutadapoca_73.png" /> Fruta da época'
            });
var format_Framboesa_74 = new ol.format.GeoJSON();
var features_Framboesa_74 = format_Framboesa_74.readFeatures(json_Framboesa_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Framboesa_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Framboesa_74.addFeatures(features_Framboesa_74);
var lyr_Framboesa_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Framboesa_74, 
                style: style_Framboesa_74,
                popuplayertitle: 'Framboesa',
                interactive: true,
                title: '<img src="styles/legend/Framboesa_74.png" /> Framboesa'
            });
var format_Figo_75 = new ol.format.GeoJSON();
var features_Figo_75 = format_Figo_75.readFeatures(json_Figo_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Figo_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Figo_75.addFeatures(features_Figo_75);
var lyr_Figo_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Figo_75, 
                style: style_Figo_75,
                popuplayertitle: 'Figo',
                interactive: true,
                title: '<img src="styles/legend/Figo_75.png" /> Figo'
            });
var format_Dispiro_76 = new ol.format.GeoJSON();
var features_Dispiro_76 = format_Dispiro_76.readFeatures(json_Dispiro_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Dispiro_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dispiro_76.addFeatures(features_Dispiro_76);
var lyr_Dispiro_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dispiro_76, 
                style: style_Dispiro_76,
                popuplayertitle: 'Dióspiro',
                interactive: true,
                title: '<img src="styles/legend/Dispiro_76.png" /> Dióspiro'
            });
var format_Clementina_77 = new ol.format.GeoJSON();
var features_Clementina_77 = format_Clementina_77.readFeatures(json_Clementina_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Clementina_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clementina_77.addFeatures(features_Clementina_77);
var lyr_Clementina_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clementina_77, 
                style: style_Clementina_77,
                popuplayertitle: 'Clementina',
                interactive: true,
                title: '<img src="styles/legend/Clementina_77.png" /> Clementina'
            });
var format_Castanha_78 = new ol.format.GeoJSON();
var features_Castanha_78 = format_Castanha_78.readFeatures(json_Castanha_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Castanha_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Castanha_78.addFeatures(features_Castanha_78);
var lyr_Castanha_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Castanha_78, 
                style: style_Castanha_78,
                popuplayertitle: 'Castanha',
                interactive: true,
                title: '<img src="styles/legend/Castanha_78.png" /> Castanha'
            });
var format_Ameixa_79 = new ol.format.GeoJSON();
var features_Ameixa_79 = format_Ameixa_79.readFeatures(json_Ameixa_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Ameixa_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ameixa_79.addFeatures(features_Ameixa_79);
var lyr_Ameixa_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ameixa_79, 
                style: style_Ameixa_79,
                popuplayertitle: 'Ameixa',
                interactive: true,
                title: '<img src="styles/legend/Ameixa_79.png" /> Ameixa'
            });
var format_Derivados_80 = new ol.format.GeoJSON();
var features_Derivados_80 = format_Derivados_80.readFeatures(json_Derivados_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Derivados_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derivados_80.addFeatures(features_Derivados_80);
var lyr_Derivados_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derivados_80, 
                style: style_Derivados_80,
                popuplayertitle: 'Derivados',
                interactive: true,
                title: '<img src="styles/legend/Derivados_80.png" /> Derivados'
            });
var format_Carnevermelha_81 = new ol.format.GeoJSON();
var features_Carnevermelha_81 = format_Carnevermelha_81.readFeatures(json_Carnevermelha_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Carnevermelha_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carnevermelha_81.addFeatures(features_Carnevermelha_81);
var lyr_Carnevermelha_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carnevermelha_81, 
                style: style_Carnevermelha_81,
                popuplayertitle: 'Carne vermelha',
                interactive: true,
                title: '<img src="styles/legend/Carnevermelha_81.png" /> Carne vermelha'
            });
var format_Carnebranca_82 = new ol.format.GeoJSON();
var features_Carnebranca_82 = format_Carnebranca_82.readFeatures(json_Carnebranca_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Carnebranca_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carnebranca_82.addFeatures(features_Carnebranca_82);
var lyr_Carnebranca_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carnebranca_82, 
                style: style_Carnebranca_82,
                popuplayertitle: 'Carne branca',
                interactive: true,
                title: '<img src="styles/legend/Carnebranca_82.png" /> Carne branca'
            });
var group_Carnes = new ol.layer.Group({
                                layers: [lyr_Derivados_80,lyr_Carnevermelha_81,lyr_Carnebranca_82,],
                                fold: "open",
                                title: 'Carnes'});
var group_Fruta = new ol.layer.Group({
                                layers: [lyr_Uva_58,lyr_Tangera_59,lyr_Pssego_60,lyr_Pra_61,lyr_Noz_62,lyr_Nspera_63,lyr_Morango_64,lyr_Mirtilo_65,lyr_Meloa_66,lyr_Ma_67,lyr_Maracuj_68,lyr_Limo_69,lyr_Laranja_70,lyr_kiwi_71,lyr_Groselha_72,lyr_Frutadapoca_73,lyr_Framboesa_74,lyr_Figo_75,lyr_Dispiro_76,lyr_Clementina_77,lyr_Castanha_78,lyr_Ameixa_79,],
                                fold: "open",
                                title: 'Fruta'});
var group_Hortcolas = new ol.layer.Group({
                                layers: [lyr_Tremoo_18,lyr_Tomate_19,lyr_Salsa_20,lyr_Pimento_21,lyr_Pepino_22,lyr_Penca_23,lyr_Nabo_24,lyr_Nabia_25,lyr_Milho_26,lyr_Hortcolasdapoca_27,lyr_Hortalia_28,lyr_Grelos_29,lyr_Feijovermelho_30,lyr_Feijoverde_31,lyr_Feijofrade_32,lyr_Feijobranco_33,lyr_Feijo_34,lyr_Fava_35,lyr_Espinafre_36,lyr_Espargos_37,lyr_Ervilha_38,lyr_Couvegalega_39,lyr_Couveflor_40,lyr_CouveCorao_41,lyr_Couve_42,lyr_Courgette_43,lyr_Cogumeloshiitake_44,lyr_Chuchu_45,lyr_Cenoura_46,lyr_Cebolo_47,lyr_Cebola_48,lyr_Cabaa_49,lyr_Brcolo_50,lyr_Beringela_51,lyr_Batata_52,lyr_Alhofrancs_53,lyr_Alface_54,lyr_Agrio_55,lyr_Abrolho_56,lyr_Abbora_57,],
                                fold: "open",
                                title: 'Hortícolas'});
var group_Vinhos = new ol.layer.Group({
                                layers: [lyr_Vinhoverde_10,lyr_Vinhotinto_11,lyr_Vinhobranco_12,lyr_Vinho_13,lyr_Rose_14,lyr_Loureiro_15,lyr_Espumante_16,lyr_Alvarinho_17,],
                                fold: "open",
                                title: 'Vinhos'});
var group_Estaes = new ol.layer.Group({
                                layers: [lyr_Inverno_4,lyr_Outono_5,lyr_Primavera_6,lyr_Vero_7,],
                                fold: "open",
                                title: 'Estações'});
var group_Certificaes = new ol.layer.Group({
                                layers: [lyr_Produobiolgica_1,lyr_Produointegrada_2,lyr_GlobalGAP_3,],
                                fold: "open",
                                title: 'Certificações'});

lyr_Freg_Guimaraes_0.setVisible(true);lyr_Produobiolgica_1.setVisible(true);lyr_Produointegrada_2.setVisible(true);lyr_GlobalGAP_3.setVisible(false);lyr_Inverno_4.setVisible(false);lyr_Outono_5.setVisible(false);lyr_Primavera_6.setVisible(false);lyr_Vero_7.setVisible(false);lyr_Ovos_8.setVisible(false);lyr_Mel_9.setVisible(false);lyr_Vinhoverde_10.setVisible(false);lyr_Vinhotinto_11.setVisible(false);lyr_Vinhobranco_12.setVisible(false);lyr_Vinho_13.setVisible(false);lyr_Rose_14.setVisible(false);lyr_Loureiro_15.setVisible(false);lyr_Espumante_16.setVisible(false);lyr_Alvarinho_17.setVisible(false);lyr_Tremoo_18.setVisible(false);lyr_Tomate_19.setVisible(false);lyr_Salsa_20.setVisible(false);lyr_Pimento_21.setVisible(false);lyr_Pepino_22.setVisible(false);lyr_Penca_23.setVisible(false);lyr_Nabo_24.setVisible(false);lyr_Nabia_25.setVisible(false);lyr_Milho_26.setVisible(false);lyr_Hortcolasdapoca_27.setVisible(false);lyr_Hortalia_28.setVisible(false);lyr_Grelos_29.setVisible(false);lyr_Feijovermelho_30.setVisible(false);lyr_Feijoverde_31.setVisible(false);lyr_Feijofrade_32.setVisible(false);lyr_Feijobranco_33.setVisible(false);lyr_Feijo_34.setVisible(false);lyr_Fava_35.setVisible(false);lyr_Espinafre_36.setVisible(false);lyr_Espargos_37.setVisible(false);lyr_Ervilha_38.setVisible(false);lyr_Couvegalega_39.setVisible(false);lyr_Couveflor_40.setVisible(false);lyr_CouveCorao_41.setVisible(false);lyr_Couve_42.setVisible(false);lyr_Courgette_43.setVisible(false);lyr_Cogumeloshiitake_44.setVisible(false);lyr_Chuchu_45.setVisible(false);lyr_Cenoura_46.setVisible(false);lyr_Cebolo_47.setVisible(false);lyr_Cebola_48.setVisible(false);lyr_Cabaa_49.setVisible(false);lyr_Brcolo_50.setVisible(false);lyr_Beringela_51.setVisible(false);lyr_Batata_52.setVisible(false);lyr_Alhofrancs_53.setVisible(false);lyr_Alface_54.setVisible(false);lyr_Agrio_55.setVisible(false);lyr_Abrolho_56.setVisible(false);lyr_Abbora_57.setVisible(false);lyr_Uva_58.setVisible(false);lyr_Tangera_59.setVisible(false);lyr_Pssego_60.setVisible(false);lyr_Pra_61.setVisible(false);lyr_Noz_62.setVisible(false);lyr_Nspera_63.setVisible(false);lyr_Morango_64.setVisible(false);lyr_Mirtilo_65.setVisible(false);lyr_Meloa_66.setVisible(false);lyr_Ma_67.setVisible(false);lyr_Maracuj_68.setVisible(false);lyr_Limo_69.setVisible(false);lyr_Laranja_70.setVisible(false);lyr_kiwi_71.setVisible(false);lyr_Groselha_72.setVisible(false);lyr_Frutadapoca_73.setVisible(false);lyr_Framboesa_74.setVisible(false);lyr_Figo_75.setVisible(false);lyr_Dispiro_76.setVisible(false);lyr_Clementina_77.setVisible(false);lyr_Castanha_78.setVisible(false);lyr_Ameixa_79.setVisible(false);lyr_Derivados_80.setVisible(false);lyr_Carnevermelha_81.setVisible(false);lyr_Carnebranca_82.setVisible(false);
var layersList = [lyr_Freg_Guimaraes_0,group_Certificaes,group_Estaes,lyr_Ovos_8,lyr_Mel_9,group_Vinhos,group_Hortcolas,group_Fruta,group_Carnes];
lyr_Freg_Guimaraes_0.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Distrito': 'Distrito', 'Area_ha': 'Area_ha', 'Des_Simpli': 'Des_Simpli', });
lyr_Produobiolgica_1.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Produointegrada_2.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_GlobalGAP_3.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Inverno_4.set('fieldAliases', {'Nome': 'Nome', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Estações': 'Estações', 'Condiçõe': 'Condiçõe', 'Condiç�_1': 'Condiç�_1', 'Informaç�': 'Informaç�', });
lyr_Outono_5.set('fieldAliases', {'Nome': 'Nome', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Estações': 'Estações', 'Condiçõe': 'Condiçõe', 'Condiç�_1': 'Condiç�_1', 'Informaç�': 'Informaç�', });
lyr_Primavera_6.set('fieldAliases', {'Nome': 'Nome', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Estações': 'Estações', 'Condiçõe': 'Condiçõe', 'Condiç�_1': 'Condiç�_1', 'Informaç�': 'Informaç�', });
lyr_Vero_7.set('fieldAliases', {'Nome': 'Nome', 'Contacto': 'Contacto', 'Freguesia': 'Freguesia', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Estações': 'Estações', 'Condiçõe': 'Condiçõe', 'Condiç�_1': 'Condiç�_1', 'Informaç�': 'Informaç�', });
lyr_Ovos_8.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Mel_9.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Vinhoverde_10.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_Vinhotinto_11.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Vinhobranco_12.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Vinho_13.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_Rose_14.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Loureiro_15.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Espumante_16.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Alvarinho_17.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_vinho': 'auxiliary_storage_symbol_name_vinho', });
lyr_Tremoo_18.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Tomate_19.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Salsa_20.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Pimento_21.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Pepino_22.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Penca_23.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Nabo_24.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Nabia_25.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Milho_26.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Hortcolasdapoca_27.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Hortalia_28.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Grelos_29.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Feijovermelho_30.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Feijoverde_31.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Feijofrade_32.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Feijobranco_33.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Feijo_34.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Fava_35.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Espinafre_36.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Espargos_37.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Ervilha_38.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Couvegalega_39.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Couveflor_40.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_CouveCorao_41.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Couve_42.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Courgette_43.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Cogumeloshiitake_44.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Chuchu_45.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Cenoura_46.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Cebolo_47.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Cebola_48.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Cabaa_49.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Brcolo_50.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Beringela_51.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Batata_52.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Alhofrancs_53.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Alface_54.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Agrio_55.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Abrolho_56.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Abbora_57.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Uva_58.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Tangera_59.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Pssego_60.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Pra_61.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Noz_62.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Nspera_63.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Morango_64.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Mirtilo_65.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Meloa_66.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Ma_67.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Maracuj_68.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Limo_69.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'auxiliary_storage_symbol_name_fruta': 'auxiliary_storage_symbol_name_fruta', });
lyr_Laranja_70.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_kiwi_71.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Groselha_72.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Frutadapoca_73.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Framboesa_74.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Figo_75.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Dispiro_76.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Clementina_77.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Castanha_78.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Ameixa_79.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Derivados_80.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Carnevermelha_81.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', });
lyr_Carnebranca_82.set('fieldAliases', {'Nome': 'Nome', 'x': 'x', 'y': 'y', 'Contacto': 'Contacto', 'Morada': 'Morada', 'E-mail': 'E-mail', 'Categoria': 'Categoria', 'Produto': 'Produto', 'Época': 'Época', 'Condiçõe': 'Condiçõe', 'Condiç�': 'Condiç�', 'Informaç�': 'Informaç�', 'Estação': 'Estação', });
lyr_Freg_Guimaraes_0.set('fieldImages', {'fid': 'TextEdit', 'DICOFRE': 'TextEdit', 'Freguesia': 'TextEdit', 'Municipio': 'TextEdit', 'Distrito': 'TextEdit', 'Area_ha': 'TextEdit', 'Des_Simpli': 'TextEdit', });
lyr_Produobiolgica_1.set('fieldImages', {'Nome': '', 'x': '', 'y': '', 'Contacto': '', 'Freguesia': '', 'Morada': '', 'E-mail': '', 'Categoria': '', 'Produto': '', 'Época': '', 'Condiçõe': '', 'Condiç�': '', 'Informaç�': '', });
lyr_Produointegrada_2.set('fieldImages', {'Nome': '', 'x': '', 'y': '', 'Contacto': '', 'Freguesia': '', 'Morada': '', 'E-mail': '', 'Categoria': '', 'Produto': '', 'Época': '', 'Condiçõe': '', 'Condiç�': '', 'Informaç�': '', });
lyr_GlobalGAP_3.set('fieldImages', {'Nome': '', 'x': '', 'y': '', 'Contacto': '', 'Freguesia': '', 'Morada': '', 'E-mail': '', 'Categoria': '', 'Produto': '', 'Época': '', 'Condiçõe': '', 'Condiç�': '', 'Informaç�': '', });
lyr_Inverno_4.set('fieldImages', {'Nome': 'TextEdit', 'Contacto': 'TextEdit', 'Freguesia': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Estações': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�_1': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Outono_5.set('fieldImages', {'Nome': 'TextEdit', 'Contacto': 'TextEdit', 'Freguesia': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Estações': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�_1': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Primavera_6.set('fieldImages', {'Nome': 'TextEdit', 'Contacto': 'TextEdit', 'Freguesia': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Estações': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�_1': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Vero_7.set('fieldImages', {'Nome': 'TextEdit', 'Contacto': 'TextEdit', 'Freguesia': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Estações': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�_1': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Ovos_8.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Mel_9.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Vinhoverde_10.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_Vinhotinto_11.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Vinhobranco_12.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Vinho_13.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_Rose_14.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Loureiro_15.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Espumante_16.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Alvarinho_17.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_vinho': 'TextEdit', });
lyr_Tremoo_18.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Tomate_19.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Salsa_20.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Pimento_21.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Pepino_22.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Penca_23.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Nabo_24.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Nabia_25.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Milho_26.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Hortcolasdapoca_27.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Hortalia_28.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Grelos_29.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Feijovermelho_30.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Feijoverde_31.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Feijofrade_32.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Feijobranco_33.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Feijo_34.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Fava_35.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Espinafre_36.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Espargos_37.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Ervilha_38.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Couvegalega_39.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Couveflor_40.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_CouveCorao_41.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Couve_42.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Courgette_43.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Cogumeloshiitake_44.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Chuchu_45.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Cenoura_46.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Cebolo_47.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Cebola_48.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Cabaa_49.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Brcolo_50.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Beringela_51.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Batata_52.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Alhofrancs_53.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Alface_54.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Agrio_55.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Abrolho_56.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Abbora_57.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Uva_58.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Tangera_59.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Pssego_60.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Pra_61.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Noz_62.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Nspera_63.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Morango_64.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Mirtilo_65.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Meloa_66.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Ma_67.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Maracuj_68.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Limo_69.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'auxiliary_storage_symbol_name_fruta': 'TextEdit', });
lyr_Laranja_70.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_kiwi_71.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Groselha_72.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Frutadapoca_73.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Framboesa_74.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Figo_75.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Dispiro_76.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Clementina_77.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Castanha_78.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Ameixa_79.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Derivados_80.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Carnevermelha_81.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', });
lyr_Carnebranca_82.set('fieldImages', {'Nome': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Contacto': 'TextEdit', 'Morada': 'TextEdit', 'E-mail': 'TextEdit', 'Categoria': 'TextEdit', 'Produto': 'TextEdit', 'Época': 'TextEdit', 'Condiçõe': 'TextEdit', 'Condiç�': 'TextEdit', 'Informaç�': 'TextEdit', 'Estação': '', });
lyr_Freg_Guimaraes_0.set('fieldLabels', {'fid': 'inline label - visible with data', 'DICOFRE': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Area_ha': 'inline label - visible with data', 'Des_Simpli': 'inline label - visible with data', });
lyr_Produobiolgica_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Produointegrada_2.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_GlobalGAP_3.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Inverno_4.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Contacto': 'hidden field', 'Freguesia': 'hidden field', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Estações': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�_1': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Outono_5.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Contacto': 'hidden field', 'Freguesia': 'hidden field', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Estações': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�_1': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Primavera_6.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Contacto': 'hidden field', 'Freguesia': 'hidden field', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Estações': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�_1': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Vero_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Contacto': 'hidden field', 'Freguesia': 'hidden field', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Estações': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�_1': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Ovos_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Mel_9.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Vinhoverde_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_alpha': 'inline label - visible with data', });
lyr_Vinhotinto_11.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Vinhobranco_12.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Vinho_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_alpha': 'inline label - visible with data', });
lyr_Rose_14.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Loureiro_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Espumante_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Alvarinho_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_vinho': 'inline label - visible with data', });
lyr_Tremoo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Tomate_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Salsa_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Pimento_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Pepino_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Penca_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Nabo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Nabia_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Milho_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Hortcolasdapoca_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Hortalia_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Grelos_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Feijovermelho_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Feijoverde_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Feijofrade_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Feijobranco_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Feijo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Fava_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Espinafre_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Espargos_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Ervilha_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Couvegalega_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Couveflor_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_CouveCorao_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Couve_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Courgette_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Cogumeloshiitake_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Chuchu_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Cenoura_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Cebolo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Cebola_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Cabaa_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Brcolo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Beringela_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Batata_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Alhofrancs_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Alface_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Agrio_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Abrolho_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Abbora_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Uva_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Tangera_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Pssego_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Pra_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Noz_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Nspera_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Morango_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Mirtilo_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Meloa_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Ma_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Maracuj_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Limo_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'auxiliary_storage_symbol_name_fruta': 'inline label - visible with data', });
lyr_Laranja_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_kiwi_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Groselha_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Frutadapoca_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Framboesa_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Figo_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Dispiro_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Clementina_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Castanha_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Ameixa_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Derivados_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Carnevermelha_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', });
lyr_Carnebranca_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', 'Contacto': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'E-mail': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Época': 'inline label - visible with data', 'Condiçõe': 'inline label - visible with data', 'Condiç�': 'inline label - visible with data', 'Informaç�': 'inline label - visible with data', 'Estação': 'inline label - visible with data', });
lyr_Carnebranca_82.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
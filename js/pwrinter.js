var textfile = null;
var pwalogo = null;
var fontColor = '#3D3D3D';
var wColor = '#706CF5';

document.addEventListener('DOMContentLoaded', function() {
    //generation button
    var btnGen = document.getElementById('btnGenerate');
    btnGen.addEventListener('click', function(){
        writeSVG(getPWALogo());
    });

    //W color selection
    document.getElementById('colorPicker').addEventListener("change", watchColorPicker, false);
    function watchColorPicker(event) {
        wColor = event.target.value;
        //generates preview
        generatePreview();
    }
    //font color
    document.getElementById('radDark').addEventListener('change', function(){
        document.getElementById('content').style.animationName = 'lighten';
        fontColor = '#3D3D3D';
        generatePreview();
    });
    document.getElementById('radLight').addEventListener('change', function(){
        document.getElementById('content').style.animationName = 'darken';
        fontColor = '#FFF';
        generatePreview();
    });
});

var getPWALogoPrev = function(){
    //return pwalogo = "<?xml version=\"1.0\" encoding=\"utf-8\"?\>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" width=\"110.667\" height=\"43.9435\" viewBox=\"0 0 110.67 43.94\" enable-background=\"new 0 0 110.67 43.94\" xml:space=\"preserve\">\n<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 81.4481,36.481L 84.6452,28.3964L 93.8762,28.3964L 89.495,16.1326L 94.9742,2.2771L 110.667,43.9435L 99.0942,43.9435L 96.4123,36.481L 81.4481,36.481 Z \"/>\n<path fill=\""+wColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 71.5748,41.6665L 88.3744,0L 77.2367,6.10352e-005L 65.7446,26.9259L 57.5726,0.00012207L 49.012,0.00012207L 40.2375,26.9259L 34.0496,14.6563L 28.4498,31.9085L 34.1353,41.6665L 45.0961,41.6665L 53.0251,17.5198L 60.5849,41.6665L 71.5748,41.6665 Z \"/>\n<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 10.5721,27.363L 17.4323,27.363C 19.5103,27.363 21.3608,27.1311 22.9836,26.6672L 24.7578,21.2015L 29.7162,5.92542C 29.3384,5.3266 28.907,4.76044 28.4221,4.22693C 25.8763,1.40894 22.1515,0 17.2476,0L 0,0L 0,41.6664L 10.5721,41.6664L 10.5721,27.363 Z M 19.6526,9.58575C 20.647,10.5866 21.1442,11.9259 21.1442,13.6038C 21.1442,15.2945 20.7069,16.6354 19.8324,17.6266C 18.8737,18.7278 17.1084,19.2784 14.5366,19.2784L 10.5721,19.2784L 10.5721,8.08447L 14.5657,8.08447C 16.9626,8.08447 18.6582,8.5849 19.6526,9.58575 Z \"/>\n</svg>";
    return pwalogo = "<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 81.4481,36.481L 84.6452,28.3964L 93.8762,28.3964L 89.495,16.1326L 94.9742,2.2771L 110.667,43.9435L 99.0942,43.9435L 96.4123,36.481L 81.4481,36.481 Z \"/>\n<path fill=\""+wColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 71.5748,41.6665L 88.3744,0L 77.2367,6.10352e-005L 65.7446,26.9259L 57.5726,0.00012207L 49.012,0.00012207L 40.2375,26.9259L 34.0496,14.6563L 28.4498,31.9085L 34.1353,41.6665L 45.0961,41.6665L 53.0251,17.5198L 60.5849,41.6665L 71.5748,41.6665 Z \"/>\n<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 10.5721,27.363L 17.4323,27.363C 19.5103,27.363 21.3608,27.1311 22.9836,26.6672L 24.7578,21.2015L 29.7162,5.92542C 29.3384,5.3266 28.907,4.76044 28.4221,4.22693C 25.8763,1.40894 22.1515,0 17.2476,0L 0,0L 0,41.6664L 10.5721,41.6664L 10.5721,27.363 Z M 19.6526,9.58575C 20.647,10.5866 21.1442,11.9259 21.1442,13.6038C 21.1442,15.2945 20.7069,16.6354 19.8324,17.6266C 18.8737,18.7278 17.1084,19.2784 14.5366,19.2784L 10.5721,19.2784L 10.5721,8.08447L 14.5657,8.08447C 16.9626,8.08447 18.6582,8.5849 19.6526,9.58575 Z \"/>";
};

var generatePreview = function(){
    document.getElementById('preview').innerHTML = getPWALogoPrev();
};

var getPWALogo = function(){
    return pwalogo = "<?xml version=\"1.0\" encoding=\"utf-8\"?\>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" width=\"110.667\" height=\"43.9435\" viewBox=\"0 0 110.67 43.94\" enable-background=\"new 0 0 110.67 43.94\" xml:space=\"preserve\">\n<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 81.4481,36.481L 84.6452,28.3964L 93.8762,28.3964L 89.495,16.1326L 94.9742,2.2771L 110.667,43.9435L 99.0942,43.9435L 96.4123,36.481L 81.4481,36.481 Z \"/>\n<path fill=\""+wColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 71.5748,41.6665L 88.3744,0L 77.2367,6.10352e-005L 65.7446,26.9259L 57.5726,0.00012207L 49.012,0.00012207L 40.2375,26.9259L 34.0496,14.6563L 28.4498,31.9085L 34.1353,41.6665L 45.0961,41.6665L 53.0251,17.5198L 60.5849,41.6665L 71.5748,41.6665 Z \"/>\n<path fill=\""+fontColor+"\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 10.5721,27.363L 17.4323,27.363C 19.5103,27.363 21.3608,27.1311 22.9836,26.6672L 24.7578,21.2015L 29.7162,5.92542C 29.3384,5.3266 28.907,4.76044 28.4221,4.22693C 25.8763,1.40894 22.1515,0 17.2476,0L 0,0L 0,41.6664L 10.5721,41.6664L 10.5721,27.363 Z M 19.6526,9.58575C 20.647,10.5866 21.1442,11.9259 21.1442,13.6038C 21.1442,15.2945 20.7069,16.6354 19.8324,17.6266C 18.8737,18.7278 17.1084,19.2784 14.5366,19.2784L 10.5721,19.2784L 10.5721,8.08447L 14.5657,8.08447C 16.9626,8.08447 18.6582,8.5849 19.6526,9.58575 Z \"/>\n</svg>";
};

var writeSVG = function(text){
    var data = new Blob([text], {type:'text/plain'});
    if(textfile !== null){
        window.URL.revokeObjectURL(textfile);
    }
    textfile = window.URL.createObjectURL(data);    
    return textfile;
};
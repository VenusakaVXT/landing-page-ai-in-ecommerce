window.ldpageViewport = function () {
    var widthWindow = window.outerWidth > 0 ? window.outerWidth : window.screen.width;
    var widthDevice = widthWindow;
    var isViewDesktop = widthWindow >= 768;
    var contentTag = '';
    if (typeof window.ldpageIsViewDesktop == 'undefined' || window.ldpageIsViewDesktop == undefined) {
        window.ldpageIsViewDesktop = isViewDesktop;
    }
    if (widthWindow == 768) {
        widthDevice = 768;
    } else {
        if (!isViewDesktop) {
            widthDevice = 420;
        } else {
            widthDevice = 960;
        }
    }
    contentTag = 'width=' + widthDevice + ', user-scalable=no';
    var scaleScreen = 1;
    if (!isViewDesktop && widthDevice != window.screen.width && window.screen.width > 0) {
        scaleScreen = window.screen.width / widthDevice;
    }
    if (scaleScreen != 1) {
        contentTag +=
            ', initial-scale=' +
            scaleScreen +
            ', minimum-scale=' +
            scaleScreen +
            ', maximum-scale=' +
            scaleScreen;
    }
    var docHeadViewport = document.getElementById('viewport');
    if (!docHeadViewport) {
        docHeadViewport = document.createElement('meta');
        docHeadViewport.setAttribute('id', 'viewport');
        docHeadViewport.setAttribute('name', 'viewport');
        document.head.appendChild(docHeadViewport);
    }
    docHeadViewport.setAttribute('content', contentTag);
};

window.ldpageViewport();

window.onresize = function resizeWindowSize() {
    if (window.ldpageViewport) window.ldpageViewport();
}
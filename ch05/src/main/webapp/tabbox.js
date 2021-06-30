var tabBox = {
  //DOM Level 2 Event 처리 : element의 event의 Listener를 등록하는 방식
  // 2) JavaScript code(DOM API)로만 작성하기
  init: function () {
    /** this = tabBox */
    console.log(this);
    window.addEventListener("load", this.onWindowLoad.bind(this)); /** bind */
  },
  onWindowLoad: function () {
    var divTabBox = document.getElementsByClassName("tab-box")[0];

    var ul = divTabBox.childNodes[1];
    var liTabs = ul.getElementsByTagName("li");

    console.log(this);
    for (var i = 0; i < liTabs.length; i++) {
      liTabs[i].addEventListener("click", this.onTabClicked);
    }
  },
  onTabClicked: function () {
    var liSelected = document.getElementsByClassName("selected");
    liSelected.length == 1 && (liSelected[0].className = "");

    this.className = "selected";
  },
};

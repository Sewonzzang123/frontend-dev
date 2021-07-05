var imageViewer = {
  init: function () {
    var that = this;
    $(function () {
      $("#btn-change").click(that._changeImage.bind(that));
      $("#btn-slideshow").click(that._slideShow.bind(that));
      $(".image-viewer img").dblclick(that._consoleLog); //더블클릭

      that._changeImage();
    });
  },
  _consoleLog: function () {
    //이미지 더블클릭시 console.log
    // console.log(this);  image
    var name = $(this).attr("alt");
    console.log(name);
  },
  _changeImage: function () {
    // 랜덤수 0,1,2,3,4
    var result = Math.floor(Math.random() * this._images.length);
    alt = this._images[result].name;
    src = "images/" + this._images[result].file;
    $("img").attr("src", src).attr("alt", alt);
  },
  _slideShow: function () {
    var that = this;
    // console.log("_slideShow this" + that); imageViewer
    if (this._intervalId) {
      $("#btn-slideshow").text("슬라이드쇼 시작");
      clearInterval(this._intervalId);
      this._intervalId = null;
    } else {
      $("#btn-slideshow").text("슬라이드쇼 중지");
      this._intervalId = setInterval(function () {
        // console.log(" setInterval this" + this); window
        // 따라서 >> this.imageViewer._changeImage();
        that._changeImage();
      }, 1000);
    }
  },
  _intervalId: null,
  _images: [
    {
      name: "국화",
      file: "Chrysanthemum.jpg",
    },
    { name: "사막", file: "Desert.jpg" },
    { name: "수국", file: "Hydrangeas.jpg" },
    { name: "해파리", file: "Jellyfish.jpg" },
    { name: "코알라", file: "Koala.jpg" },
    { name: "등대", file: "Lighthouse.jpg" },
    { name: "펭귄", file: "Penguins.jpg" },
    { name: "툴립", file: "Tulips.jpg" },
  ],
};

/*
if ($("#btn-slideshow").text() == "슬라이드쇼 시작") {
    $("#btn-slideshow").text("슬라이드쇼 중지");
    imageViewer.intervalId = setInterval(function () {}, 1000);
  } else {
    $("#btn-slideshow").text("슬라이드쇼 시작");
    clearInterval(intervalId);
    imageViewer.intervalId = null;
  }
  intervalId가 null인지 아닌지로 판별해서 슬라이드쇼 시작중지
*/

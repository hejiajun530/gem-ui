<template>
  <div>
    <div class="upload">
      <slot></slot>
      <!-- 上传图片按钮 -->
      <div class="upload-file">
        <div class="upload-file-text">上传图片</div>
        <input
          type="file"
          accept="image/*"
          :multiple="multiple"
          class="upload-file-input"
          ref="uploadInput"
          @change="handleChangeUploadImg"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    multiple: {
      default: false
    }
  },
  data() {
    return {
      imglist: [],
      // 是否压缩
      compressFlag: false
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 图片上传
    handleChangeUploadImg() {
      var _self = this;
      var files = _self.$refs.uploadInput.files;
      // console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (_self.compressFlag) {
          if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
            _self.compress(files[i], function(data) {
              // console.log(data);
              _self.imglist.push(data);
            });
          }
        } else {
          if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
            var reader = new FileReader();
            reader.onload = function(e) {
              if (!_self.multiple) {
                _self.imglist = [];
              }
              // 防止重复上传
              _self.imglist.push(e.srcElement.result);
              // console.log(_self.img);
              let formData = new FormData();
              formData.append('file', files[i]);
              console.log(formData.get('file'), '----------');
              _self.$emit('g-uploadList', formData, _self.imglist);
            };
            reader.readAsDataURL(files[i]);
          }
        }
      }
    },
    // 删除图片
    handleClickDel(type, index) {
      var _self = this;
      if (type == 'img') {
        _self.imglist.splice(index, 1);
        _self.$emit('g-uploadList', _self.imglist);
      } else if (type == 'file') {
        _self.fileList.splice(index, 1);
        _self.fileName.splice(index, 1);
        _self.$emit('g-uploadList', _self.fileList, _self.fileName);
      }
    },
    compress(fileObj, callback) {
      var _self = this;
      // console.log(fileObj);
      if (typeof FileReader === 'undefined') {
        console.log('当前浏览器内核不支持base64图标压缩');
      } else {
        try {
          var reader = new FileReader();
          // console.log("reader");
          reader.onload = function(e) {
            // console.log("onload");
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
              var canvas = document.createElement('canvas'),
                context = canvas.getContext('2d');
              var x = image.width / 200; //压缩倍数  数越小，压缩越多   同时图片会缩小
              var imageWidth;
              var imageHeight;
              // 当图片宽度大于100就压缩
              if (image.width > 100) {
                imageWidth = image.width / x; //压缩后图片的大小
                imageHeight = image.height / x;
              } else {
                imageWidth = image.width / 1; //不进行压缩大小
                imageHeight = image.height / 1;
              }
              canvas.width = imageWidth;
              canvas.height = imageHeight;
              context.drawImage(image, 0, 0, imageWidth, imageHeight);
              // console.log("drawImage");
              // toDataURL 中第二个参数越小，压缩的越小    同时图片越模糊
              var data = canvas.toDataURL('image/jpeg');
              // var data = canvas.toDataURL("image/jpeg", 0.3);
              var urlFile = _self.convertBase64UrlToBlob(data);
              // console.log(urlFile);
              //压缩完成执行回调
              callback(data);
            };
          };
          reader.readAsDataURL(fileObj);
        } catch (e) {
          console.log('压缩失败!');
        }
      }
    },
    // 用于产看压缩后的图片大小
    convertBase64UrlToBlob(urlData) {
      var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  }
};
</script>
<style scoped>
/* 图片 */
.upload {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
}
.upload img {
  height: 80px;
  margin: 0 5px 0 0;
}
.upload-file {
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px dashed #cccccc;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
}
.upload-file::before,
.upload-file::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.upload-file::before {
  width: 20px;
  height: 2px;
  background-color: #666666;
}
.upload-file::after {
  width: 2px;
  height: 20px;
  background-color: #666666;
}
.upload-file-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.upload-file-input {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
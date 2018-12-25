<template>
  <div>
    <quill-editor v-model="content" :options="editorOption"></quill-editor>
  </div>
</template>
<script>
import { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/ImageExtend", ImageExtend);

export default {
  data() {
    return {
      content: `<p><strong><em>Or drag/paste an image here.</em></strong></p>`,
      editorOption: {
        modules: {
          ImageExtend: {
            name: "img",
            size: 2, // 单位为M, 1M = 1024KB
            action: "http://localhost:54891/api/Blog/UploadPhotosAsync",
            headers: xhr => {
               return window.localStorage.Token;
            },
            response: res => {
              return ("http://localhost:54891/"+"api/Blog/GetImage?name="+res.data.data+"&width=0");
            }
          },
          toolbar: {
            container: container,
            handlers: {
              image: function() {
                QuillWatch.emit(this.quill.id);
              }
            }
          },
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white"
            },
            modules: ["Resize", "DisplaySize", "Toolbar"]
          }
        }
      }
    };
  }
};
</script>

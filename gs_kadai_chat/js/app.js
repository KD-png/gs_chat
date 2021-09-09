    
    
    $("#send").on("click", function () {
        newPostRef.push({
          username: $("#username").val(), 
          text: $("#text").val(), 
        })
        $("#text").val(""); 
        $("#username").val(""); 
      });
  
      // 受信処理
      newPostRef.on("child_added", function (data) {
        let v = data.val(); 
  
        console.log(v); 
  
        let str = `<p>${v.username}<br>${v.text}</p>`;
  
        // ここでデータをhtmlに埋め込む
        $("#output").prepend(str);
      })
  
      $("#text").on("keydown", function (e) {
        console.log(e, "event");
  
        // エンターキーを押したら送信処理を実行
        if (e.keyCode === 13) {
          newPostRef.push({
            username: $("#username").val(), 
            text: $("#text").val(), 
          })
          $("#text").val("");
          $("#username").val("");
        }
      })

      
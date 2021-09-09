//新規登録処理
$("register").addEventListener('click', function(e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
    .catch(function(error) {
      alert('登録できません（' + error.message + '）');
    });
  });
//ログイン処理
$("login").addEventListener('click', function(e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(mailAddress, password)
    .catch(function(error) {
      alert('ログインできません（' + error.message + '）');
    });
  });

  //認証状態の確認
  newPostRef.auth().onAuthStateChanged(function(user) {
    if(user) {
      //ログイン状態
      alert("ログインに成功しました");
    }else{
      //ログアウト状態
    }
  });

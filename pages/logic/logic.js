$(function() {
  $("#mb-Matias").click(function() {
    if ($(this).siblings().length == 0){
      var txt = $("<div></div>").html(`
      <h1> Matías Pizarro Orellana </h1>
      <h2> About me </h2>
      <p> My name is Matías Pizarro and I am 21 years old. I am a Computer Science student. My hobbies are coding, video games and music. My favourite bands are Dream Theater and Rise Against.</p>
      <h2>Computing Related Likes</h2>
      <ul>
        <li>DataBases</li>
        <li>Software Development</li>
        <li>Hacking</li>
      </ul>
      <h2> Contact me </h2>
      <ul>
        <li><p>Github: <a href="https://github.com/xof96">blackmathix</a></p></li>
        <li><p>Facebook: <a href="https://facebook.com/me.pizarro.o">Matias Pizarro Orellana</a></p></li>
      </ul>
      `);
      console.log($(this).after(txt));
    }
    else {
      $(this).siblings().remove();
    }
  });
});

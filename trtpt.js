var s = document.getElementById('search-input');
s.onkeyup = function(e) {
    if (s.value == 'trtpt....') {
        var audio = new Audio('/js/sw.mp3');
        audio.play();
        
        var persons = [];
        persons.push({color: 'red', left: '20%', bottom: 90});
        persons.push({color: 'blue', left: '50%', bottom: 120});
        persons.push({color: 'green', left: '80%', bottom: 90});
        
        $.each(persons, function() {
            var p = this;
            var html = '';
            html += '<style>';
            html += '@-webkit-keyframes eetp_head_animation{100%,20%,40%,60%,80%{-webkit-transform-origin:bottom center}20%{-webkit-transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg)}100%{-webkit-transform:rotate(0deg)}}@keyframes eetp_head_animation{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}100%{transform:rotate(0deg)}}.eetp_head_animation{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-animation-name:eetp_head_animation;animation-name:eetp_head_animation}';
            html += '</style>';
            html += '<div class="eetp_p" style="position: fixed; bottom: '+(p.bottom - (p.bottom*2 + 10))+'px; left: '+p.left+'; width: 40px; height: 60px; z-index: 999999;">';
            html += '<div class="eetp_head eetp_head_animation" style="width: 40px; height: 20px; background-color: '+p.color+'"></div>';
            html += '<div class="eetp_body" style="width: 20px; height: 40px; margin: 0 auto; background-color: '+p.color+'"></div>';
            html += '</div>';
            var p_dom = $(html);
            $(document.body).append(p_dom);
            p_dom.animate({
                bottom: p.bottom + 'px'
            }, 10000);
        });
    }
}

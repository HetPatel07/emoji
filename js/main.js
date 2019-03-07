    var a = document.getElementById('emoji');
    var b = a.getAttribute('src');
    var d = document.getElementById('emojimain');

    function emoji() {
        d.setAttribute('onclick', 'emoji1()');
        a.setAttribute('src', 'img/Smiling_Face_Emoji_with_Blushed_Cheeks_grande.png');
    }

    function emoji1() {
        d.setAttribute('onclick', 'emoji2()');
        a.setAttribute('src', 'img/CnYZD64ABT8ngejsBhT7SxdrbY6LSy_159_compprod_grande.png');
    }

    function emoji2() {
        d.setAttribute('onclick', 'emoji3()');
        a.setAttribute('src', 'img/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_grande.png');
    }

    function emoji3() {
        d.setAttribute('onclick', 'emoji()');
        a.setAttribute('src', 'img/Smiling_Face_Emoji_grande.png');
    }


    //using if satatement
    var click = 0;
    var aa = document.getElementById('emojia');

    function uif() {
        click = click + 1;
        console.log(click);
        //        if (click == 1) {
        //            aa.setAttribute('src', 'img/Smiling_Face_Emoji_with_Blushed_Cheeks_grande.png');
        //        } else if (click == 2) {
        //            aa.setAttribute('src', 'img/CnYZD64ABT8ngejsBhT7SxdrbY6LSy_159_compprod_grande.png');
        //        } else if (click == 3) {
        //            aa.setAttribute('src', 'img/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_grande.png');
        //        } else {
        //            aa.setAttribute('src', 'img/Smiling_Face_Emoji_grande.png');
        //            click = 0;
        //        }
        switch (click) {
            case 0:
                console.log('hello world');
                break;
            case 1:
                console.log('helllo');
                aa.setAttribute('src', 'img/Smiling_Face_Emoji_with_Blushed_Cheeks_grande.png');
                break;
            case 2:
                console.log('helllo');
                aa.setAttribute('src', 'img/CnYZD64ABT8ngejsBhT7SxdrbY6LSy_159_compprod_grande.png');
                break;
            case 3:
                aa.setAttribute('src', 'img/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_grande.png');
                break;
            default:
                aa.setAttribute('src', 'img/Smiling_Face_Emoji_grande.png');
                click = 0;
                break;
        }
    }

onload = function () {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('#header');
        var headerCover = document.querySelector('#header-cover');

        if (window.scrollY >= 1) {
            header.classList.add('on');
            headerCover.classList.add('on');
        } else {
            header.classList.remove('on');
            headerCover.classList.remove('on');
        }
    });

    var mailTitle = document.querySelectorAll(".mail-lists");
    var searchFieldInput = document.querySelector(".search-field-input")

    if ( querySelector.value('searchFieldInput') == 1 ) {
        // 문자열 찾아내서 정렬까지 시켜야함.
        // 아마도 찾아낸 문자열을 제외한 나머지 항목들에게 안보이게 하는 display: none; 같은걸 걸어서
        // 정렬시켜야 할 것 같음.
    }




    // var quill = new Quill('#editor', {
    //     theme: 'snow'
    // });
    
};

function element(totalPages, page){
    var liTag='';
    var beforePage = page - 1 ;
    var afterPage = page  + 3;
    var liActive = '';

    if(page > 1){
        liTag += `<li onclick="element(totalPages, ${page - 1})" class="btn prev"><a href="/prod?page=${page - 1}"><span><i class="fas fa-angle-left"></i>Prev</span></a></li>`;
    };
    if(page > 2){
        liTag += `<li onclick="element(totalPages, 1 )" class="numb"><a href="/prod?page=${1}"><span>1</span></a></li>`;
        if(page > 3){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    };

    // how many pages or li show before the current li
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage  = afterPage + 1;
    }

    
    for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
        if(pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1 ;
            
        }

        if(page === pageLength){
            liActive = 'active'
        }else{
            liActive=""
        }
        liTag += `<li onclick="element(totalPages,${pageLength})" class="numb ${liActive}"><a href="/prod?page=${pageLength}"><span>${pageLength}</span></a></li>`
    }

    if(page < totalPages -2){
        if(page < totalPages -3){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li onclick="element(totalPages, ${totalPages})" class="numb"><a href="/prod?page=${totalPages}"><span>${totalPages}</span></a></li>`;
    };

    if(page < totalPages){
        liTag += `<li onclick="element(totalPages, ${page + 1})" class="btn next"><a href="/prod?page=${page+1}"><span>Next<i class="fas fa-angle-right"></i></span></a></li>`;
    }

    // console.log(document.cookie);
    // var pageCookie= parseInt(document.cookie.split(';')[1].trim().slice(5));
    // console.log(pageCookie);
    
    ulTag.innerHTML = liTag;       
    // localStorage.setItem('page',JSON.stringify(pageCookie));
}

const ulTag = document.querySelector('.pagination-list');


    
// var data = JSON.parse(localStorage.getItem('pane')) || 1; 

var pageCookie= parseInt(document.cookie.split(';')[1].trim().slice(5)); // xử lý cookies
localStorage.setItem('page',JSON.stringify(pageCookie));// gán vào localStogare

var page = JSON.parse(localStorage.getItem('page')) || 1; 

var totalPages = 25 // tổng số trang
element(totalPages, page); // gọi hàm
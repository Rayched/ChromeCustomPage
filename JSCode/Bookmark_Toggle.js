const BookmarkBar = document.getElementById("Bookmark_bar");
const BookmarkOpen = document.getElementById("Bookmark_open");
const BookmarkClose = document.getElementById("Bookmark_close");

const BookmarkBarToggle = () => {
    const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen")
    
   
    if(isBookmarkBarOpen==="close"){
        localStorage.setItem("isBookmarkBarOpen", "open");
        BookmarkBar.style.display="block";
        BookmarkOpen.style.display="flex";
        BookmarkClose.style.display="none";
        return;
    }
    else {
        localStorage.setItem("isBookmarkBarOpen", "close");
        BookmarkBar.style.display = "none";
        BookmarkOpen.style.display = "none";
        BookmarkClose.style.display = "flex";
    }
    /*
        먼저 작성한 코드는 if, else 조건문이 많기 때문에 코드의 가독성이 떨어져보인다.
        early return 패턴을 적용해서 Code를 간략화한다고 했다.
        근데 early return이 뭐지..?
        궁금해서 구글링을 해서, 다른 개발자 분이 블로그에 정리해놓은 글을
        잠깐 살펴봤지만..."음, 완벽하게 이해했어!!(이해하지 못함)" 상태가 되버렸다.
        오늘 마음이 뒤숭숭해서 그런지 평소보다 피곤한 것 같아서 강의의 2/3 정도만 수행하고
        일단 오늘은 여기까지 하도록 하자.
        타고난 오성이 게을러서 그런지 작업 효율이 잘 안나온다.
        오히려 3개월 전에 주 5일 일했던 때보다 떨어지는 것 같다...
        이러면 안되는데 말이야...
    */
}

document.getElementById("Bookmark_open_btn").addEventListener("click", BookmarkBarToggle);
document.getElementById("Bookmark_close_btn").addEventListener("click", BookmarkBarToggle);
const BookmarkBar = document.getElementById("Bookmark_bar");
const BookmarkOpen = document.getElementById("Bookmark_open");
const BookmarkClose = document.getElementById("Bookmark_close");

const BookmarkBarToggle = () => {
    const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen")
    
    if(isBookmarkBarOpen){
        if(isBookmarkBarOpen==="open"){
            localStorage.setItem("isBookmarkBarOpen", "close");
            BookmarkBar.style.display = "none";
            BookmarkOpen.style.display = "none";
            BookmarkClose.style.display = "flex";
        }
        else {
            localStorage.setItem("isBookmarkBarOpen", "open");
            BookmarkBar.style.display="block";
            BookmarkOpen.style.display="flex";
            BookmarkClose.style.display="none";
        }
    }
    else {
        localStorage.setItem("isBookmarkBarOpen", "close");
        BookmarkBar.style.display = "none";
        BookmarkOpen.style.display = "none";
        BookmarkClose.style.display = "flex";
    }
}

document.getElementById("Bookmark_open_btn").addEventListener("click", BookmarkBarToggle);
document.getElementById("Bookmark_close_btn").addEventListener("click", Boo);
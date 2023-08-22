//북마크 추가, 삭제 동작 Code

const newBookmarkForm = document.getElementById("Bookmark_item_input_form");

//북마크 리스트
let BookmarkList = [];
if(localStorage.getItem("BookmarkList")){
    BookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
} else {
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
}

//북마크 추가 버튼 초기 설정
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") : (newBookmarkForm.style.display = "none");
};

document.getElementById("Bookmark_item_add_btn").addEventListener("click", newBookmarkToggle);
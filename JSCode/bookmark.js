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

//북마크 추가 기능 구현
const addBookmarkItem = () => {
    let BookmarkList = [];
    if(localStorage.getItem("bookmarkList")){
        BookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
    }
    let name = document.getElementById("New_Bookmark_name_input").value;
    let url = document.getElementById("New_Bookmark_url_input").value;
    let createAt = Date.now();
    BookmarkList.push({
        name: name, 
        url: url, 
        createAt: createAt
    });
    //변수 명과 객체로 저장할 Property의 value 값이 불일치해서 발생한 문제
    //변수 명과 객체의 각 Property value 값을 일치하도록 수정하니 문제가 해결됨
    //강의에서 나온 소스코드를 무지성으로 따라 치기만 해서 발생한 문제
    
    //BookmarkList 배열에 객체의 형태로 저장
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
    //우리가 입력한 북마크 이름과 url을
    //BookmarkList 배열에 객체의 형태로 저장하고
    //그리고 BookmarkList 배열을 localstorage에 저장한다.

    document.getElementById("New_Bookmark_name_input").value="";
    document.getElementById("New_Bookmark_url_input").value="";

    newBookmarkToggle();
}

document.getElementById("Bookmark_item_add_btn").addEventListener("click", newBookmarkToggle);
document.getElementById("add_btn").addEventListener("click", addBookmarkItem);
document.getElementById("cancel_btn").addEventListener("click", newBookmarkToggle);

//북마크 추가, 삭제 동작 Code

const newBookmarkForm = document.getElementById("Bookmark_item_input_form");

//북마크 리스트
let BookmarkList = [];
localStorage.getItem("BookmarkList") 
    ? (BookmarkList = JSON.parse(localStorage.getItem("BookmarkList")))
    : localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));

//북마크 추가 버튼 초기 설정
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

//북마크 아이템 추가 버튼 toggle logic
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

    setBookmarkItem({ 
        name: name,
        url: url,
        createAt: createAt
    });

    newBookmarkToggle();
}

//localstorage에 저장된 북마크 정보를 북마크 바에 표시하는 logic
const BookmarkItemList = document.getElementById("Bookmark_list");
//id 값이 'Bookmark_list'인 요소를 가져온 뒤, BookmarkItemList 변수에 저장

const setBookmarkItem = (item) => {
    //추가한 북마크
    const BookmarkItem = document.createElement("div");
    BookmarkItem.classList.add("Bookmark_item");
    BookmarkItem.id = `Bookmark_item-${item.createAt}`;
    //id 값 = 북마크를 생성한 시간

    const BookmarkInfo = document.createElement("div");
    BookmarkInfo.classList.add("Bookmark_Info");
    //이렇게 생성한 북마크 아이콘, 이름 요소에 'Bookmark_Info' 라는 class 값을 지정한다.

    //북마크 URL을 나타내는 변수
    const BookmarkURL = document.createElement("a");
    BookmarkURL.classList.add("Bookmark_URL");
    BookmarkURL.href = item.url;

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url_icon");

    const UrlIconImage = document.createElement("img");
    UrlIconImage.src=`https://www.google.com/s2/favicons?domain_url=${item.url}`;

    const NameElement = document.createElement("div");
    NameElement.classList.add("Name");
    NameElement.textContent = item.name;

    //북마크 삭제 버튼
    const BookmarkDeleteBtn = document.createElement("div");
    BookmarkDeleteBtn.textContent="삭제";
    BookmarkDeleteBtn.classList.add("Delete_btn");

    //BookmarkItem의 자식 요소로 BookmarkInfo, BookmarkDeleteBtn을 추가한다.
    BookmarkItem.appendChild(BookmarkInfo);
    BookmarkItem.appendChild(BookmarkDeleteBtn);

    //BookmarkInfo의 자식 요소로 BookmarkURL 추가
    BookmarkInfo.appendChild(BookmarkURL);

    //BookmarkURL의 자식 요소로 nameElement와 UrlIconImage 추가
    BookmarkURL.appendChild(urlIcon);
    BookmarkURL.appendChild(NameElement);

    //urlIcon의 자식 요소로 urlIconImage 추가
    urlIcon.append(UrlIconImage);

    BookmarkItemList.appendChild(BookmarkItem);
}
const setBookmarkList = () => {
    //localstorage에 저장된 북마크 객체들을 가져와서
    //북마크 바에 출력하는 기능을 하는 함수
    BookmarkList.forEach((item) => {
        setBookmarkItem(item);
    });
}

document.getElementById("Bookmark_item_add_btn").addEventListener("click", newBookmarkToggle);
document.getElementById("add_btn").addEventListener("click", addBookmarkItem);
document.getElementById("cancel_btn").addEventListener("click", newBookmarkToggle);
setBookmarkList();
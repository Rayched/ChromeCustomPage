//검색바 logic

const searchInput = document.getElementById("Search_Input");

//검색어를 입력하면, 해당 검색어를 검색한 결과 page로 이동하는 logic
const showSearchResult = () => {
    let searchWord = searchInput.value;
    window.location.href=`https://www.google.com/search?q=${searchWord}`;
    searchWord="";
}

const EnterKey = (event) => {
    if(event.code === "Enter"){
        showSearchResult();
    }
}
searchInput.addEventListener("keypress", (event)=>{
    EnterKey(event);
});
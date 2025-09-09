
const btn=document.querySelector(".add-book-btn");

btn.addEventListener("click",(event)=>{
    event.preventDefault();

    const tr=document.createElement("tr");

    const form=document.querySelector("form");

    const title=form.title.value.trim();
    const author=form.author.value.trim();
    const isbn=form.isbn.value.trim();

    if(!title || !author || !isbn){
        alert("Insert Required Fields");
        return;
    }


    const data=[
        {name:title,className:"title-table"},
        {name:author,className:"author-table"},
        {name:isbn,className:"isbn-table"}
    ];

    data.forEach((ele,index)=>{
        const td=document.createElement("td");
        td.textContent=ele.name;
        td.classList.add(ele.className);
        tr.appendChild(td);
    })



    const actionTd=document.createElement("td");

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn","delete");

    deleteBtn.addEventListener("click",()=>{
        tr.remove();
    })


    actionTd.appendChild(deleteBtn);

    tr.appendChild(actionTd);

    document.querySelector("#book-list").appendChild(tr);

    form.reset();

})
 
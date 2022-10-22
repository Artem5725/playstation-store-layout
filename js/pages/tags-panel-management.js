function basic_prepare_checkboxes(){
    let elems = document.getElementsByClassName('catalog-content__filter-elem-checkbox');
    for (let elem of elems){
        elem.addEventListener('change', function(){
            if(this.checked){
                // Todo add element to tag panel
                alert(this.name+ "activated");
            }
            else{
                // Todo delete element from tag panel
                alert(this.name+ "deactivated");
            }
        })
    }
}

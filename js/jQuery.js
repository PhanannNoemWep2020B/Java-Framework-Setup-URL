$(document).ready(function(){
    var url ="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flower&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function(data){
            var result = "";
            data.hits.forEach(element => {
                result += `
                    <div class="card-body">
                       <img src="${element.largeImageURL}" class = "img-fluid">
                    </div>
                    <div class="card-footer">
                        <img src="${element.userImageURL}" class = "img-fluid rounded-circle" width="40">
                        ${element.tags}
                        <i class = "material-icons float-right text-danger">favorite</i>
                        <i class = "material-icons float-right text-warning">people</i>
                        <i class = "material-icons float-right text-info">share</i>
                    </div>
                `;
            });
            $('#card').append(result);
        }
    );
});
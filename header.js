/**
 * Created by Brandon Roy on 02/10/2016.
 */



function HeaderandFooter() {
    var header="<!--brandon,Andrew,Ryan,Susan-->";
    var footer="<!--Roy family-->";
    document.body.innerHTML=header+document.body.innerHTML+footer;
}
window.addEventListener("load", HeaderandFooter);

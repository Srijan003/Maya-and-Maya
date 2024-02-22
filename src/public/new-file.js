export function add_click(event) {
    let data = $w("#repeater1").data;
    let length = $w("#repeater1").data.length;
    let newId = Number(length + 1);
    let newlet = {
        _id: `item${newId}`
    };
    data.push(newlet);
    $w("#repeater1").data = data;
}
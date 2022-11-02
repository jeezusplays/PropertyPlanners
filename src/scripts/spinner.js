import $ from "jquery"

export async function Spinner(f){
    $('#spinner').removeClass('d-none')
    await f
    $('#spinner').addClass('d-none')
    return
}
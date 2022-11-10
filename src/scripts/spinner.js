import $ from "jquery"

export async function Spinner(f){
    $('#spinner').removeClass('d-none')
    await f
    $('#spinner').addClass('d-none')
    return
}

export function spinnerOn(){
    $('#spinner').removeClass('d-none')
}
export function spinnerOff(){
    $('#spinner').addClass('d-none')
}
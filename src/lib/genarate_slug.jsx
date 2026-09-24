export function genarate_slug(text){
    try{
        if(!text) return null
        const slug = text.replaceAll(".","").replaceAll(",","").replaceAll("_","-").replaceAll(" ", "-")
        return slug
    }catch(err){
        console.log(err)
        return null
    }
}
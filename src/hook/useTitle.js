const { useEffect } = require("react")

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Open News`;
    },[title])
}
export default useTitle;
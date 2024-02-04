import useWindowSize from "./test"

export default function WindowSize() {
        const size =useWindowSize();
        return(
            <div>
            <p>Width :{size.width}</p>
            <p>Height :{size.height}</p>
            </div>
        )

}

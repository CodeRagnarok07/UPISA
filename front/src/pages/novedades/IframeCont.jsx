



const IframeCont = () => {
    return (

        <div className="iframecontainer gap-4 flex flex-col justify-center md:flex-row md:justify-between">
            <iframe
                frameBorder={0}
                width={800}
                height={480}
                style={{ width: "100%" }}
                src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=false&app_id=113869198637480&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&container_width=800&height=550&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2F/UPISAFrigorificoPY&locale=en_US&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=500"
            />
            <iframe
                type="text/html"
                width="1px"
                height="1px"
                src="https://www.embedista.com/ok/fbwidget"
                frameBorder={0}
                allowFullScreen=""
            />

<script type="text/javascript" src="https://www.embedista.com/j/fbwidget.js"></script>


            <div id="fbroot" />
            <div
                className="fblike"
                data-width=""
                data-layout=""
                data-action=""
                data-size=""
                data-share="true"
            />
            <iframe
                className="instagram-media instagram-media-rendered"
                id="instagram-embed-0"
                src="https://www.instagram.com/upisa_frigorifico/embed/?cr=1&v=12&wp=540&rd=https%3A%2F%2Fupisa.com.py&rp=%2Fes%2Fposts%2Fnovedades#%7B%22ci%22%3A0%2C%22os%22%3A3200%2C%22ls%22%3A733%2C%22le%22%3A1563%7D"
                allowTransparency="true"
                allowFullScreen="true"
                frameBorder={0}
                height={475}
                data-instgrm-payload-id="instagram-media-payload-0"
                scrolling="no"
                style={{
                    background: "white",
                    maxWidth: 540,
                    width: "99.375%",
                    maxHeight: "100%",
                    borderRadius: 3,
                    border: "1px solid rgb(219, 219, 219)",
                    boxShadow: "none",
                    display: "block",
                    margin: "0px 0px 12px",
                    minWidth: 326,
                    padding: 0
                }}
            />


<script src="https://www.instagram.com/embed.js"></script>
    <script type="text/javascript" src="https://www.embedista.com/j/instagramfeed.js"></script>
        </div>

    )
}

export default IframeCont;
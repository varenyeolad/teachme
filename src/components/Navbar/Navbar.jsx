import SearchForm from "../SearchForm/SearchForm"
import './Navbar.css'
import {
  useNavigate
} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  
  return (
    <>
        <div className="landing-frame2">
            <span onClick={() => {navigate('/')}} className="landing-text30"><span>Home</span></span>
            <span className="landing-text32"><span>About</span></span>
            <span className="landing-text34"><span>Try</span></span>
            <span className="landing-text36"><span>FAQ</span></span>
            <span className="landing-text38"><span>Team</span></span>
          </div>
        <SearchForm/>
        
        <div className="landing-market" onClick={() => {navigate('/store')}}>
            <img
              alt="Rectangle21111"
              src="/external/rectangle21111-sb4b.svg"
              className="landing-rectangle2"
            />
            <div className="landing-iconshop">
              <div className="landing-group">
                <img
                  alt="Vector1111"
                  src="/external/vector1111-xtx.svg"
                  className="landing-vector"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-0gu9.svg"
                  className="landing-vector01"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-v96h.svg"
                  className="landing-vector02"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-fev.svg"
                  className="landing-vector03"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-c7cn.svg"
                  className="landing-vector04"
                />
              </div>
            </div>
          </div>

          



          <div className="landing-connectwalletbtn">
            <img
              alt="Rectangle21111"
              src="/external/rectangle21111-zuer.svg"
              className="landing-rectangle21"
            />
            <span className="landing-text40"><span>Connect wallet</span></span>
            <div className="landing-iconprofilecircle">
              <div>
                <img
                  alt="Vector1111"
                  src="/external/vector1111-rp24p.svg"
                  className="landing-vector05"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-6n3l.svg"
                  className="landing-vector06"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-7aiq.svg"
                  className="landing-vector07"
                />
              </div>
            </div>
            <img
              alt="Line11111"
              src="/external/line11111-y3e.svg"
              className="landing-line1"
            />
            <div className="landing-iconwallet">
              <div className="landing-group2">
                <img
                  alt="Vector1111"
                  src="/external/vector1111-1c3q.svg"
                  className="landing-vector08"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-07ps.svg"
                  className="landing-vector09"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-384t.svg"
                  className="landing-vector10"
                />
              </div>
            </div>
          </div>
    </>
  )
}

import { FaArrowRightLong } from "../../ReactICON/index";
import Card from "./Card";

const Auth = ({
  setAddDocotr,
  setAddPatient,
  address,
  connectMetaMask,
  SHORTEN_ADDRESS,
}) => {
  return (
    <div className="auth-modal bg-black">
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                       <p>DeCare</p>
                      </div>
                      <Card
                        handleClick={address ? setAddPatient : connectMetaMask}
                        title={"Patient Registration"}
                        classStyle={"bg-danger"}
                      />
                      <Card
                        handleClick={address ? setAddDocotr : connectMetaMask}
                        title={"Doctor Registration"}
                        classStyle={"bg-danger "}
                      />
                      <div className="new-account mt-3 text-center">
                        <p className="mb-0">
                         connect your wallet
                          
                          <FaArrowRightLong />
                          <a
                            className="text-primary"
                            onClick={() => (address ? "" : connectMetaMask())}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &nbsp;
                            {address
                              ? `${SHORTEN_ADDRESS(address)}`
                              : "Connect Wallet"}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

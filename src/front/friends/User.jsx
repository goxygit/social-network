import { NavLink } from 'react-router-dom'
import friend1 from "../img/friend1.jpg";
import f from './friend.module.css'
const User =({p,togleFollowing,unfollowThunk,followThunk })=>{
    return(
        <div key={p.id} className={f.friendsBar}>
        <div className={f.f100}>
          <div className={f.flexBar}>
            <div>
              <NavLink to={`/profile/` + p.id}>
                <img
                  src={p.photos.small != null ? p.photos.small : friend1}
                  style={{ width: "100%", height: "100px" }}
                />
              </NavLink>
            </div>
            <div style={{ fontSize: "17px", margin: "6px 0" }}>{p.name}</div>
            <div style={{ fontSize: "13px", margin: "6px 0" }}>
              {p.amount}
            </div>
            <div>
              {p.followed ? (
                <div
                disabled={togleFollowing}
                  onClick={() => {
                    unfollowThunk(p.id)
                  }}
                  style={{ padding: "0 12px", margin: "2px 0" }}
                >
                  <div
                    className={f.hover}
                    style={{
                      padding: "0 12px",
                      borderRadius: "6px",
                      height: "36px",
                      backgroundColor: "#E7F3FF",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <span style={{ color: "#1877F2", fontWeight: "600" }}>
                      Додати
                    </span>
                  </div>
                </div>
              ) : (
                <div
                disabled={togleFollowing}
                  onClick={() => {
                    followThunk(p.id)
                  }}
                  style={{ padding: "0 12px", margin: "2px 0" }}
                >
                  <div
                    className={f.hover}
                    style={{
                      padding: "0 12px",
                      borderRadius: "6px",
                      height: "36px",
                      backgroundColor: "#E4E6EB",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <span style={{ color: "black", fontWeight: "600" }}>
                      Видалити
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}
export default User
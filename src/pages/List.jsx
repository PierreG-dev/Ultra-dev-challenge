import React from "react";
import Navbar from "../components/Layout/Navbar";
import styled from "styled-components";

const List = () => {
  return (
    <MainContainer>
      <Navbar />
      <section>
        <div
          style={{
            minHeight: 300,
            marginTop: 100,
            overflowX: "hidden",
            paddingLeft: 49,
          }}
        >
          <h2>Ma liste</h2>
          <div className="card-list">
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUpWS1uFTtyh9PrILue31St_0Gi2_q-VPqec9dCLFh7ZbP_-BwMoxjmXkEJTfjdXnvJ0fWNGF_IVeiKTuG0C7QL_Kx8gtDUJ08xtTfIjvQ4t-1e9av5WiQM3YP39OMzaXmGxpuWBGmXGRpxPoL09y83ZoALfekdrAsWflBI8MO5yGus8y0CS1Y.jpg?r=074"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8iDgJjJM-db6AsmJn1laLKP512TK1ro-L8geJ1jakPmg8DOj0YadqUc-bvFKKlTL01Ssh08gNg0MHjSb2TuyMwqKkxKbL09IzHddTot0qPLoRCGzKH7G3gqcWBj90fY4DrtbilpUyMmBZ7m6xiLlPxkE84i1J1RJLdP9NrvBWmjx4xzHH7aYI.jpg?r=f44"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeH1IKvujk-_ht_SKwmwNCvPVRgwc3Glh41MMayfFmbtpEg0LU7D_cfMeE7lgIOEecJ0w7d40j2WV7jJVqTB6IngLgE.jpg?r=bc4"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlgEeQ5mej7O7zKTqNMGJkn1E_d-YfktyDsY7wAC46QpWhdyABe-oUQpQoC5luKbTa1zgWt27JW950ft7hRjYsxuTc.jpg?r=eab"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ0hq9USLpOjlZ_pIctvaXEcpV5pPgVhrBi-3v-z-byqbJC1ZpHVFpvz45lRsz7hDP5m4fnAfWAr8UHU1eU9j-5rIXvSuDhzPr-hS6eG0i7mhZsfupEQU8Zuz3atwXuwOw.jpg?r=8d7"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZL-Pfb1u2q1tMyCkeC2ufxcIJIMqFA1VEK9h-ZVq43yLIF5coSxpnenI-8LjIecy1V7effiRnBTBPvRWI2NRQVtPY8.jpg?r=e82"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdN9EZKqeu-H0_m8J-G-wbUdBXPXFcqDaBPaGSUS1woSv-dUHVpAmpjK6rqMxda_GGli2Z1ga94MzYU5I1lu6WNwnxw.jpg?r=79e"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: 300,
            overflowX: "hidden",
            paddingLeft: 49,
          }}
        >
          <h2></h2>
          <div className="card-list" style={{ flexDirection: "row-reverse" }}>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUpWS1uFTtyh9PrILue31St_0Gi2_q-VPqec9dCLFh7ZbP_-BwMoxjmXkEJTfjdXnvJ0fWNGF_IVeiKTuG0C7QL_Kx8gtDUJ08xtTfIjvQ4t-1e9av5WiQM3YP39OMzaXmGxpuWBGmXGRpxPoL09y83ZoALfekdrAsWflBI8MO5yGus8y0CS1Y.jpg?r=074"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8iDgJjJM-db6AsmJn1laLKP512TK1ro-L8geJ1jakPmg8DOj0YadqUc-bvFKKlTL01Ssh08gNg0MHjSb2TuyMwqKkxKbL09IzHddTot0qPLoRCGzKH7G3gqcWBj90fY4DrtbilpUyMmBZ7m6xiLlPxkE84i1J1RJLdP9NrvBWmjx4xzHH7aYI.jpg?r=f44"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeH1IKvujk-_ht_SKwmwNCvPVRgwc3Glh41MMayfFmbtpEg0LU7D_cfMeE7lgIOEecJ0w7d40j2WV7jJVqTB6IngLgE.jpg?r=bc4"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlgEeQ5mej7O7zKTqNMGJkn1E_d-YfktyDsY7wAC46QpWhdyABe-oUQpQoC5luKbTa1zgWt27JW950ft7hRjYsxuTc.jpg?r=eab"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ0hq9USLpOjlZ_pIctvaXEcpV5pPgVhrBi-3v-z-byqbJC1ZpHVFpvz45lRsz7hDP5m4fnAfWAr8UHU1eU9j-5rIXvSuDhzPr-hS6eG0i7mhZsfupEQU8Zuz3atwXuwOw.jpg?r=8d7"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZL-Pfb1u2q1tMyCkeC2ufxcIJIMqFA1VEK9h-ZVq43yLIF5coSxpnenI-8LjIecy1V7effiRnBTBPvRWI2NRQVtPY8.jpg?r=e82"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdN9EZKqeu-H0_m8J-G-wbUdBXPXFcqDaBPaGSUS1woSv-dUHVpAmpjK6rqMxda_GGli2Z1ga94MzYU5I1lu6WNwnxw.jpg?r=79e"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: 300,
            overflowX: "hidden",
            paddingLeft: 49,
          }}
        >
          <h2> </h2>
          <div className="card-list">
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUpWS1uFTtyh9PrILue31St_0Gi2_q-VPqec9dCLFh7ZbP_-BwMoxjmXkEJTfjdXnvJ0fWNGF_IVeiKTuG0C7QL_Kx8gtDUJ08xtTfIjvQ4t-1e9av5WiQM3YP39OMzaXmGxpuWBGmXGRpxPoL09y83ZoALfekdrAsWflBI8MO5yGus8y0CS1Y.jpg?r=074"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8iDgJjJM-db6AsmJn1laLKP512TK1ro-L8geJ1jakPmg8DOj0YadqUc-bvFKKlTL01Ssh08gNg0MHjSb2TuyMwqKkxKbL09IzHddTot0qPLoRCGzKH7G3gqcWBj90fY4DrtbilpUyMmBZ7m6xiLlPxkE84i1J1RJLdP9NrvBWmjx4xzHH7aYI.jpg?r=f44"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeH1IKvujk-_ht_SKwmwNCvPVRgwc3Glh41MMayfFmbtpEg0LU7D_cfMeE7lgIOEecJ0w7d40j2WV7jJVqTB6IngLgE.jpg?r=bc4"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlgEeQ5mej7O7zKTqNMGJkn1E_d-YfktyDsY7wAC46QpWhdyABe-oUQpQoC5luKbTa1zgWt27JW950ft7hRjYsxuTc.jpg?r=eab"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ0hq9USLpOjlZ_pIctvaXEcpV5pPgVhrBi-3v-z-byqbJC1ZpHVFpvz45lRsz7hDP5m4fnAfWAr8UHU1eU9j-5rIXvSuDhzPr-hS6eG0i7mhZsfupEQU8Zuz3atwXuwOw.jpg?r=8d7"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZL-Pfb1u2q1tMyCkeC2ufxcIJIMqFA1VEK9h-ZVq43yLIF5coSxpnenI-8LjIecy1V7effiRnBTBPvRWI2NRQVtPY8.jpg?r=e82"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdN9EZKqeu-H0_m8J-G-wbUdBXPXFcqDaBPaGSUS1woSv-dUHVpAmpjK6rqMxda_GGli2Z1ga94MzYU5I1lu6WNwnxw.jpg?r=79e"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: 300,
            overflowX: "hidden",
            paddingLeft: 49,
          }}
        >
          <h2> </h2>
          <div className="card-list" style={{ flexDirection: "row-reverse" }}>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUpWS1uFTtyh9PrILue31St_0Gi2_q-VPqec9dCLFh7ZbP_-BwMoxjmXkEJTfjdXnvJ0fWNGF_IVeiKTuG0C7QL_Kx8gtDUJ08xtTfIjvQ4t-1e9av5WiQM3YP39OMzaXmGxpuWBGmXGRpxPoL09y83ZoALfekdrAsWflBI8MO5yGus8y0CS1Y.jpg?r=074"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8iDgJjJM-db6AsmJn1laLKP512TK1ro-L8geJ1jakPmg8DOj0YadqUc-bvFKKlTL01Ssh08gNg0MHjSb2TuyMwqKkxKbL09IzHddTot0qPLoRCGzKH7G3gqcWBj90fY4DrtbilpUyMmBZ7m6xiLlPxkE84i1J1RJLdP9NrvBWmjx4xzHH7aYI.jpg?r=f44"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeH1IKvujk-_ht_SKwmwNCvPVRgwc3Glh41MMayfFmbtpEg0LU7D_cfMeE7lgIOEecJ0w7d40j2WV7jJVqTB6IngLgE.jpg?r=bc4"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlgEeQ5mej7O7zKTqNMGJkn1E_d-YfktyDsY7wAC46QpWhdyABe-oUQpQoC5luKbTa1zgWt27JW950ft7hRjYsxuTc.jpg?r=eab"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ0hq9USLpOjlZ_pIctvaXEcpV5pPgVhrBi-3v-z-byqbJC1ZpHVFpvz45lRsz7hDP5m4fnAfWAr8UHU1eU9j-5rIXvSuDhzPr-hS6eG0i7mhZsfupEQU8Zuz3atwXuwOw.jpg?r=8d7"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZL-Pfb1u2q1tMyCkeC2ufxcIJIMqFA1VEK9h-ZVq43yLIF5coSxpnenI-8LjIecy1V7effiRnBTBPvRWI2NRQVtPY8.jpg?r=e82"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdN9EZKqeu-H0_m8J-G-wbUdBXPXFcqDaBPaGSUS1woSv-dUHVpAmpjK6rqMxda_GGli2Z1ga94MzYU5I1lu6WNwnxw.jpg?r=79e"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: 300,
            overflowX: "hidden",
            paddingLeft: 49,
          }}
        >
          <h2> </h2>
          <div className="card-list">
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUpWS1uFTtyh9PrILue31St_0Gi2_q-VPqec9dCLFh7ZbP_-BwMoxjmXkEJTfjdXnvJ0fWNGF_IVeiKTuG0C7QL_Kx8gtDUJ08xtTfIjvQ4t-1e9av5WiQM3YP39OMzaXmGxpuWBGmXGRpxPoL09y83ZoALfekdrAsWflBI8MO5yGus8y0CS1Y.jpg?r=074"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8iDgJjJM-db6AsmJn1laLKP512TK1ro-L8geJ1jakPmg8DOj0YadqUc-bvFKKlTL01Ssh08gNg0MHjSb2TuyMwqKkxKbL09IzHddTot0qPLoRCGzKH7G3gqcWBj90fY4DrtbilpUyMmBZ7m6xiLlPxkE84i1J1RJLdP9NrvBWmjx4xzHH7aYI.jpg?r=f44"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeH1IKvujk-_ht_SKwmwNCvPVRgwc3Glh41MMayfFmbtpEg0LU7D_cfMeE7lgIOEecJ0w7d40j2WV7jJVqTB6IngLgE.jpg?r=bc4"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlgEeQ5mej7O7zKTqNMGJkn1E_d-YfktyDsY7wAC46QpWhdyABe-oUQpQoC5luKbTa1zgWt27JW950ft7hRjYsxuTc.jpg?r=eab"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ0hq9USLpOjlZ_pIctvaXEcpV5pPgVhrBi-3v-z-byqbJC1ZpHVFpvz45lRsz7hDP5m4fnAfWAr8UHU1eU9j-5rIXvSuDhzPr-hS6eG0i7mhZsfupEQU8Zuz3atwXuwOw.jpg?r=8d7"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZL-Pfb1u2q1tMyCkeC2ufxcIJIMqFA1VEK9h-ZVq43yLIF5coSxpnenI-8LjIecy1V7effiRnBTBPvRWI2NRQVtPY8.jpg?r=e82"
                alt=""
              />
            </div>
            <div className="card">
              <img
                src="https://occ-0-3004-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdN9EZKqeu-H0_m8J-G-wbUdBXPXFcqDaBPaGSUS1woSv-dUHVpAmpjK6rqMxda_GGli2Z1ga94MzYU5I1lu6WNwnxw.jpg?r=79e"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;

  section {
    position: relative;
    box-shadow: 0px -27px 54px 13px rgba(23, 23, 23, 1);
    padding: 1px;
    margin: 0;
    min-height: 50vh;
    width: calc(100% - 2px);
    background: #171717;
    color: #fafafa;

    .card-list {
      display: flex;
      justify-content: space-around;
      min-width: 120%;
      width: auto;
      .card {
        width: 300px;
        height: 170px;
        margin: 0 10px;
        border-radius: 10px;
        overflow: hidden;
        transition: 0.4s;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .card:hover {
        transform: scale3d(1.2, 1.2, 2);
        cursor: pointer;
      }
    }
  }
`;

export default List;

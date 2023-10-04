import React from "react";

const Locations = () => {
  return (
    <div className="h-[1000px] w-max[1220px] py-16">
      <h2 className="text-white text-[40px] font-black w-[850px] py-10">
        SUCURSALES
      </h2>
      <table class="table-auto border-separate border-spacing-16  rounded-sm bg-white-gray text-gray-main w-[1220px] h-auto">
        <thead className="bg-gray-second text-white-gray">
          <tr>
            <th class="text-center">Dirección</th>
            <th class="text-center">Horarios</th>
            <th class="text-center">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center"> SAN VICENTE / Ambrosio Funes 1241</td>
            <td class="text-center">
              Miércoles a Lunes de 11:30 a 14:30 / 19:30 a 00:00hs
            </td>
            <td class="text-center">0-351-706-1970</td>
          </tr>
          <tr>
            <td class="text-center">ALBERDI / Av Cólon 3228</td>
            <td class="text-center">
              Miércoles a Lunes de 11:30 a 14:30 / 19:30 a 23:00hs
            </td>
            <td class="text-center">0-351-706-1970</td>
          </tr>
          <tr>
            <td class="text-center">ALTA CBA /</td>
            <td class="text-center">
              Miércoles a Lunes de 11:30 a 14:30 / 19:30 a 23:00hs
            </td>
            <td class="text-center">0-351-706-1970</td>
          </tr>
          <tr>
            <td class="text-center">ALTA CBA /</td>
            <td class="text-center">
              Miércoles a Lunes de 11:30 a 14:30 / 19:30 a 23:00hs
            </td>
            <td class="text-center">0-351-706-1970</td>
          </tr>
          <tr>
            <td class="text-center">ALTA CBA /</td>
            <td class="text-center">
              Miércoles a Lunes de 11:30 a 14:30 / 19:30 a 23:00hs
            </td>
            <td class="text-center">0-351-706-1970</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Locations;

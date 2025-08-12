import React from 'react';

const LottoTable = () => {
  return (
        <>
        {/* Lotto Table - Changed to red theme */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-800 text-white p-3">
            <h2 className="text-xl font-bold text-center">Bảng Loto Miền Bắc</h2>
            </div>
            
            <table className="w-full">
            <thead>
                <tr className="bg-red-100">
                <th className="p-2 border-r text-center">Đầu</th>
                <th className="p-2 border-r text-center">Đuôi</th>
                <th className="p-2 border-r text-center">Đầu</th>
                <th className="p-2 text-center">Đuôi</th>
                </tr>
            </thead>
            <tbody>
                {[
                ['0', '5', '6', '0'],
                ['1', '2,5,1', '8,1', '1'],
                ['2', '-', '1,4', '2'],
                ['3', '5,3', '3,9,7,5,4,5', '3'],
                ['4', '7,7,5,3,2', '7', '4'],
                ['5', '3,3', '3,7,8,8,0,4,1', '5'],
                ['6', '7,6,6,0,8', <span className="text-red-600 font-bold">7,6,8,6</span>, '6'],
                ['7', <span className="text-red-600 font-bold">6,4,5,3</span>, '6,4,4', '7'],
                ['8', '1,6,5,5', '6', '8'],
                ['9', '3', '-', '9'],
                ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border-r text-center font-bold">{row[0]}</td>
                    <td className="p-2 border-r text-center">{row[1]}</td>
                    <td className="p-2 border-r text-center">{row[2]}</td>
                    <td className="p-2 text-center font-bold">{row[3]}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    );
};

export default LottoTable;
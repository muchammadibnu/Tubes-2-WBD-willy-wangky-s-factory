import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo">
      <div className="row">
        <div className="col-3 offset1">
            <a className="brand-logo">Willy Wangky's Factory</a>
        </div>
        <div className="col-8">
            <ul className="right">
                <li><a className="blue-text text-lighten-3" href="/">Home</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatBahanSupplier'>Bahan Supplier</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatBahanPabrik'>Bahan Factory</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatDaftarCoklat'>Daftar Coklat</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatPemesanan'>Daftar Pesanan</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatResep'>Resep</a></li>
                <li><a className="blue-text text-lighten-3" href='/MelihatSaldo'>Saldo</a></li>
                <li><a className="blue-text text-lighten-3" href='/'>Beli Bahan</a></li>
            </ul>
        </div>
    </div>
    </nav> 
  )
}

export default Navbar
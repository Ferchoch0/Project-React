export function Navbar(){

    return(
      <nav>
        <h1 className='am-navbar-title'>
          <a href="#"> Ama<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlUlEQVR4nO3aachmYxgH8IMJNWOd7BlL1rIMQhhJpEnxwWhiyAdlCVlKxpKE1IQP8oGsyRI1fLFNTGJe29SULRpL4yUyxppBM5aZn+5cT05P877POec5y6Pm/+XUfc69/O/7uq/7f133ybIRBbbElOz/COyIu7Ecf/sXq/Ac5mPvbNSAnXAczsNczMNXBuMNnInNuhz8rrgdXxgeS7sicQl+LzHQYzFrkvfvdEHistQx3sK7WIE1A4jMwvGTvL8jGwUkG8cBuBKL8adyWNvZ5scmMdMLYnXKDr4f93VBYg4+US/WJgfShSlth92SSeCI2NAn4wycjUUVyFybjRqwPX4tSeSjbBSB8Qqrckg2SsCBWF+ByBXZKCC82Wx8qBoWdk1ghxCDnxkOK7sicAweC/dZB8a6IPCmevFdmwSm4K6KG3kQ3m8z0ntJc3i+rdN8oWZxWxsu9SHNY27TRFLs3Qb2b5LErS2RWJlWvikSV2kPDzdF4vwhXOzXOHxAeNuP2U0FTr1cVFl8ij2jnaNKmFW9CbwIjv6oSOJlTM+d/D8WrHdj3SRSpLe6AoGURbmul2jD6fitYN3VPfJ1kdg3UpplMdZzm9gUN2FdJ+EtdsHnfR2kwTyBg3BS37vkBF7Jb9D47u2Sk/AxtqiLxDZ4L9d4Ck9vwT65b6biEdwZjmDn3LtpuLnCvlqDmXWKwJRQezWCopn5QymRwe4T1N0jCBfd0P0rOq8WErnU/1Z9ZVtHOmdxdPht2P2FkS69J8lt1bE+tVMbiQ0kCi7FCzVGehOZ07l1D/4EPI5vtIPlte2JHInL8VdLBH7B9bV5pyCwOR5oicAK3JBSq7URyG3s11sgkGT/0Y1Ichw65BXZ97g/dFhSxeKyZ69IZqeExAdRPqd2AglxgBXVPf22/SBOySvT5K7j2m1d/oxJqc6o92LWQJw9v6Tu6WHVZMlkPBXfXZMrmx7uNfU3o87r4mdVjycmjZ1x2obyUHiyNlmOIyuq2ISnsW1B7/dD1Dk4V35qlH0ZSuDqsIr0PKdwciGZQ4XLlV6EVurExb1Rd1H8zTBe0IzHijReVkb/FMJvWgkCh4X2Sif1REjOYEnosgWRYn0m/oZ4rUgnPxcUbcvi0n9qUQLR/tKSE7WkTPv5js4KM+mfnWXhSi9KF5iVGv9vxcdDHVwc/5/sFxeiKcI8ERfg0dgng2e/gNeakST5UA1txEZkCf8AM77755T1bdoAAAAASUVORK5CYII="/>onia <span>Del.</span></a> 
        </h1>
        <div className='am-navbar-menu'>
          <input className='am-navbar-search-text' placeholder="Buscar..." type="search" name="" id="" />
          <button className='am-navbar-search-button' type="submit">
            <img width="100" height="100" src="https://img.icons8.com/ios/100/000000/search--v1.png" alt="search--v1"/>
          </button>
        </div>
      </nav> 
    )
}
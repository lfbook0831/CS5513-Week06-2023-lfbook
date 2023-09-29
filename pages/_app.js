function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

        body {
          font-family: 'Nanum Pen Script', cursive;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;



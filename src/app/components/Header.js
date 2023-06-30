export default function Header(props) {
      console.log(props);

      return (
            <div className="h-24 bg-gradient-to-b from-[#000000] ">
                  <div className="w-full h-16 flex justify-center items-center">
                        <div className="flex items-center justify-center text-xl gap-5">
                              <div>Home</div>
                              <div>About</div>
                        </div>
                  </div>
            </div>
      );
}

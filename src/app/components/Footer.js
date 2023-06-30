export default function Footer() {
      return (
            <div>
                  <div className="h-96"></div>
                  <div className="w-full bg-zinc-950 flex justify-between">
                        <div className="w-full h-full flex flex-col">
                              <div className="text-zinc-600 flex gap-1">
                                    Email: <h3 className="text-zinc-400">dev@leokre.de</h3>
                              </div>
                              <div className="text-zinc-600 flex gap-1">
                                    Social:
                                    <a className="text-zinc-400" href="https://www.github.com/leo-kre">
                                          Github
                                    </a>
                              </div>
                              <h1 className="text-zinc-400">© 2023 Leon Kreutzer</h1>
                        </div>
                  </div>
            </div>
      );
}

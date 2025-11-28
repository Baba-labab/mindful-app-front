import React from 'react'
import NavbarPublic from '../components/NavbarPublic'
import Footer from '../components/Footer'

function Sources() {
  return (
    <div>

      <NavbarPublic />
      <div className="px-4 min-h-screen bg-[url(/images/to-go-biking.jpg)] bg-cover bg-no-repeat bg-center">
        <h1 className="text-black text-center text-4xl p-10">List of Resources</h1>
        <div className="flex justify-center">
          <div className="overflow-x-auto bg-white/80 rounded-lg md:w-2/3 mb-10">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Page</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/be-now.jpg"
                            alt="images with collage be now" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">haraldlepisk</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/holz-alt-t%c3%bcr-motivierende-zitate-3345661/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/bench.jpg"
                            alt="bench" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">biancamentil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/bank-sitz-sich-ausruhen-wald-1190768/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/inhale-exhale.jpg"
                            alt="hand holding pen" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">asundermeier</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/photos/pen-colored-pencil-to-learn-5112463/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/jump.jpg"
                            alt="man jumping on empty street" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">OlacyErtem</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/person-springen-stra%c3%9fe-schnee-kalt-6065005/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/to-go-biking.jpg"
                            alt="girl on a one wheel bike" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Muscat_Coach</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/radfahren-radeln-himmel-wolkenbruch-5360648/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>

                {/* row 6 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/sea.jpg"
                            alt="fisherboat on quiet sea" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">jplenio</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/meer-angeln-still-ruhe-ozean-2565573/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>

                {/* row 7 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="images/shellfish.jpg"
                            alt="shellfish" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">neelam279</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/photos/schaltier-molluske-jakobsmuschel-9526850/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 8 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        {/* <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="images/shellfish.jpg"
                          alt="shellfish" />    
                      </div> */}
                        <span className="text-sm opacity-50">Three-minute breathing</span>
                      </div>
                      <div>
                        <div className="font-bold">Peter Morgan</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    freemindfulness.org
                  </td>
                  <th>
                    <a href="https://www.freemindfulness.org/download" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        {/* <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="images/shellfish.jpg"
                          alt="shellfish" />    
                      </div> */}
                        <span className="text-sm opacity-50">Clouds mp4</span>
                      </div>
                      <div>
                        <div className="font-bold">katingthon</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/videos/sky-blue-cloud-natural-light-38278/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 10 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        {/* <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="images/shellfish.jpg"
                          alt="shellfish" />    
                      </div> */}
                        <span className="text-sm opacity-50">Gentle Nature Sound</span>
                      </div>
                      <div>
                        <div className="font-bold">Rockot</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/users/rockot-1947599/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 11 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451833/bounce_g9mc1l.jpg"
                            alt="bouncing girl" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold">Vika_Glitter</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/de/users/rockot-1947599/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 12 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451841/message-in-a-bottle_hl2qry.jpg"
                            alt="message in a bottle" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold">atlantios</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/photos/message-in-a-bottle-sea-wreck-3437294/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 13 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451803/walk_vgiwqa.jpg"
                            alt="feet climbing" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold">PeterChou: focusonpc</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/photos/mountaineering-climb-mountains-walk-3791851/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
                {/* row 13 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451187/samples/breakfast.jpg"
                            alt="plate with breakfast" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Cloudinary
                  </td>
                  <th>
                    <a href="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451187/samples/breakfast.jpg" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
{/* row 14 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1764011835/tiger-1098607_1280_xkmlhj.jpg"
                            alt="tiger" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold">cocoparisienne</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pixabay
                  </td>
                  <th>
                    <a href="https://pixabay.com/photos/tiger-animal-jungle-mammal-big-cat-1098607/" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
{/* row 15 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1764011834/sky-5534319_1280_hue1r6.jpg"
                            alt="sky" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Cloudinary
                  </td>
                  <th>
                    <a href="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1764011834/sky-5534319_1280_hue1r6.jpg" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>
{/* row 15 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="preview">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451183/samples/two-ladies.jpg"
                            alt="two woman laughing" />
                        </div>
                        {/* <span className="text-sm opacity-50">Bounce</span> */}
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Cloudinary
                  </td>
                  <th>
                    <a href="https://res.cloudinary.com/dsj7xmt8k/image/upload/v1762451183/samples/two-ladies.jpg" title="link" target="_blank"
                      rel="noopener noreferrer">Link</a>
                  </th>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>


      <Footer />


    </div>
  )
}

export default Sources
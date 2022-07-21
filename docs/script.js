/* eslint-disable no-undef */
/**
 * autocomplete on map
 * https://github.com/tomik23/autocomplete
 *
 */

const DistData = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [78.19960438385083, 13.5661521931948],
        [78.19855742483772, 13.565492596549147],
        [78.19280550306765, 13.565477241299636],
        [78.19113463322576, 13.56824593868817],
        [78.18964997376749, 13.573251045072528],
        [78.19055665943311, 13.582777144405036],
        [78.18895522687014, 13.588007794028032],
        [78.19806518054436, 13.597469382237497],
        [78.20322133011312, 13.603975625294858],
        [78.20485559192076, 13.61061719987823],
        [78.20340599831906, 13.625209730629653],
        [78.19529661695412, 13.630205563358013],
        [78.17495036613435, 13.62995608008505],
        [78.16992605768746, 13.632410346234694],
        [78.16834783290344, 13.65411622169413],
        [78.1650923229973, 13.65764339573837],
        [78.15548652719642, 13.65857565323102],
        [78.13835359353467, 13.657155159131184],
        [78.13248719335112, 13.657768923101044],
        [78.12513546314266, 13.654495072043687],
        [78.11659211050407, 13.655935433103377],
        [78.10310273921736, 13.64908862741455],
        [78.09981814417873, 13.641829005673218],
        [78.0955429322538, 13.642321527080306],
        [78.08992243608623, 13.644139095951116],
        [78.08882755758849, 13.653330606307213],
        [78.08917100948912, 13.659176979336005],
        [78.08194267514995, 13.66393823996646],
        [78.07497527962089, 13.67323333409894],
        [78.06743215634351, 13.675698365346793],
        [78.06999621044864, 13.68049724260261],
        [78.07318487981325, 13.683289761249927],
        [78.07445855961859, 13.68878836453509],
        [78.07169164290978, 13.694314700579204],
        [78.07312219476569, 13.69689543093202],
        [78.0942841166277, 13.68939224891525],
        [78.10901843433403, 13.691351540988766],
        [78.11454636960453, 13.693198273535348],
        [78.11636541451583, 13.707137504737167],
        [78.11904845480069, 13.712738469074267],
        [78.11851962364554, 13.718998689234581],
        [78.11462515379574, 13.723386103464671],
        [78.10954203081637, 13.726754986910294],
        [78.10648181212683, 13.731883924383355],
        [78.10235119215922, 13.736338459570256],
        [78.09395500924391, 13.742193415185376],
        [78.09831051063955, 13.751745553915313],
        [78.10435843585364, 13.758991735217913],
        [78.11024404641758, 13.76170147610171],
        [78.11555306412367, 13.765504106166984],
        [78.12005932020189, 13.77046712409774],
        [78.127278875254, 13.78561673153292],
        [78.12419703513905, 13.79637518455014],
        [78.1180062085181, 13.807034388117543],
        [78.11665027352184, 13.812264166534838],
        [78.12624162871941, 13.830440434903279],
        [78.12246912721866, 13.84951968161583],
        [78.11494543683588, 13.862142509028274],
        [78.1062572456996, 13.861345381504238],
        [78.09723354607797, 13.863480776965323],
        [78.08374581106592, 13.863461026157106],
        [78.0797188528717, 13.880471809209206],
        [78.0767458670852, 13.883024713018122],
        [78.06913179337832, 13.885261250157031],
        [78.06346028424382, 13.887823180431655],
        [78.05704548187286, 13.892978841906642],
        [78.04984970920215, 13.895154234434614],
        [78.05144213152967, 13.881826933445758],
        [78.05166139297512, 13.87224985417495],
        [78.0500857634128, 13.866519341140732],
        [78.04658126521241, 13.861318887292136],
        [78.02430091785327, 13.862804155228737],
        [78.01903577027333, 13.864904344534454],
        [78.01344456412968, 13.87010765009538],
        [78.00012967619445, 13.8707748606449],
        [77.99378302151558, 13.870026151095177],
        [77.99089375769243, 13.865159708643699],
        [77.98987195092464, 13.857164006689267],
        [77.97901920322445, 13.835009685536706],
        [77.97442192186904, 13.82853284228128],
        [77.95318195535656, 13.828300975886597],
        [77.95672939504618, 13.833133870878582],
        [77.95663399701323, 13.837681350426188],
        [77.95428143114614, 13.848105581207836],
        [77.95033182377445, 13.879312926397557],
        [77.95096444559233, 13.88848673981144],
        [77.958029143445, 13.892727905574233],
        [77.98015798518587, 13.89688764406109],
        [77.98657714757168, 13.901654161963842],
        [77.98319451180846, 13.913614805232637],
        [77.98312340280386, 13.920527225170986],
        [77.98186810187062, 13.928140727476821],
        [77.98201112882812, 13.932495268350792],
        [77.98642990968732, 13.945873846651986],
        [77.98706915260385, 13.955894003189059],
        [77.97487116929146, 13.95877053276452],
        [77.96970652427618, 13.958173416521538],
        [77.96373849976473, 13.950119290235428],
        [77.96270842937786, 13.945256972979626],
        [77.95919805797728, 13.936147765423446],
        [77.95749544157853, 13.934954304677968],
        [77.9544506288043, 13.9366322080831],
        [77.94727056299466, 13.932813396989642],
        [77.9440626366898, 13.92611055171577],
        [77.93814576776921, 13.917005601399847],
        [77.92823317465496, 13.906887427450926],
        [77.92000883445229, 13.905418190239441],
        [77.91432765185327, 13.907611079902548],
        [77.9088194216625, 13.910489598204567],
        [77.90403785857471, 13.915857851992827],
        [77.89801361092653, 13.919466451818183],
        [77.89562879246144, 13.925838908241891],
        [77.89615030909097, 13.935820959769336],
        [77.89528394440897, 13.939266417184882],
        [77.87067409973838, 13.934847725292942],
        [77.86228445512579, 13.935116440781691],
        [77.85419147884393, 13.936338192831354],
        [77.83827383271664, 13.93513326307143],
        [77.8297257695323, 13.938512943675907],
        [77.82640491410469, 13.942840682455595],
        [77.82233510894987, 13.938951062777347],
        [77.81660055358832, 13.93054499634249],
        [77.8144651531769, 13.925506162056951],
        [77.81447626073349, 13.91661056996333],
        [77.81550573870759, 13.91120890142814],
        [77.81922486932798, 13.902694452725497],
        [77.8228469345543, 13.89911208853507],
        [77.82917249876638, 13.897250424259113],
        [77.83324009963708, 13.887930720899373],
        [77.83548986818589, 13.879646401203958],
        [77.82742122771886, 13.87406298303229],
        [77.83597135231096, 13.868679627095135],
        [77.81902061204366, 13.860149681850437],
        [77.816060727554, 13.854713538802198],
        [77.81099125606525, 13.848707314898334],
        [77.80271821382671, 13.848976461828657],
        [77.79455216099326, 13.847930178472971],
        [77.78420613428588, 13.84390352426884],
        [77.78225225865317, 13.839723954540254],
        [77.78561864002724, 13.8320647217862],
        [77.78847569995588, 13.828034123535316],
        [77.78863373829309, 13.824704407252066],
        [77.78668514566866, 13.82092473011619],
        [77.7773853256163, 13.81654843807082],
        [77.76347685140597, 13.815520744183697],
        [77.75631424952368, 13.814183762203449],
        [77.74914885604169, 13.811747809818677],
        [77.74168958023867, 13.811383782949868],
        [77.73651936676511, 13.809677514106857],
        [77.72656694539462, 13.80065531892229],
        [77.72092956411271, 13.798444128216401],
        [77.72323480982098, 13.791201701723391],
        [77.72085182041126, 13.782657532768692],
        [77.72231497114025, 13.768752441217478],
        [77.72127134492588, 13.758713987749665],
        [77.72160038319095, 13.75412131841395],
        [77.71915819062511, 13.745692846952704],
        [77.71690750940293, 13.740714592129509],
        [77.7155069559373, 13.742153854164133],
        [77.71032961610501, 13.73895816706553],
        [77.70360353784342, 13.769349745676365],
        [77.69273727809289, 13.76652771193768],
        [77.68685674399423, 13.763564812654524],
        [77.67652108832215, 13.760166857440497],
        [77.67170841643255, 13.760132328690636],
        [77.67779671901454, 13.770438704884052],
        [77.67976151266336, 13.77799845128118],
        [77.6782093268976, 13.785354140876386],
        [77.67198079142283, 13.783714879545942],
        [77.664540851874, 13.7844978783027],
        [77.65702154591489, 13.783663199715042],
        [77.6222241898208, 13.768080211577265],
        [77.6183377052983, 13.763213746548317],
        [77.62053358705928, 13.754653297193862],
        [77.64168706505724, 13.749118657181729],
        [77.64471100924675, 13.743081664065093],
        [77.64152514098573, 13.740678505410271],
        [77.6364721997861, 13.73777498294104],
        [77.62918716910302, 13.735220347426969],
        [77.62356447993419, 13.736167081491786],
        [77.6121247271826, 13.750329411197908],
        [77.60344252517825, 13.751335904985233],
        [77.59473158092355, 13.744541470070097],
        [77.58937782350655, 13.738311156504537],
        [77.58143987944436, 13.73438154614232],
        [77.57441349168698, 13.737106953485267],
        [77.5638589328811, 13.724170977512562],
        [77.55589207588721, 13.728102597827869],
        [77.55287339984933, 13.735862305295504],
        [77.54926663585819, 13.74259774844366],
        [77.5471902590098, 13.75137899705116],
        [77.5371620213237, 13.753484300688996],
        [77.52730512972857, 13.751463655032586],
        [77.52276097076943, 13.74464773861373],
        [77.53035715087454, 13.73870753267744],
        [77.53427099420385, 13.732890137600855],
        [77.53524319891358, 13.726691189027791],
        [77.53554835867759, 13.714696712640084],
        [77.53328460379925, 13.70488473226668],
        [77.52926027915403, 13.695553359916198],
        [77.52004464272338, 13.69334150517123],
        [77.51565320828847, 13.696456182459091],
        [77.51460891767539, 13.700309237309051],
        [77.51446578277343, 13.708112565404429],
        [77.51043746680617, 13.71203676426773],
        [77.49495238295454, 13.714387035411812],
        [77.48732320427892, 13.710798257279267],
        [77.49000256696227, 13.706422334939102],
        [77.4911465514127, 13.699303614549303],
        [77.49276699680166, 13.694305795192808],
        [77.4905736261904, 13.687310755987792],
        [77.48411400201596, 13.685210447891366],
        [77.45730050512184, 13.683351114775157],
        [77.44991348931556, 13.682117798212392],
        [77.44023277174753, 13.681694313333532],
        [77.43574633640549, 13.672754192927671],
        [77.42488811302394, 13.672047752010084],
        [77.4022558068388, 13.67246056650679],
        [77.39090850046266, 13.663892272574044],
        [77.3838546948193, 13.66046994420956],
        [77.37811769023313, 13.64493318065698],
        [77.37218012237072, 13.639613664468644],
        [77.37115677338326, 13.63439734570971],
        [77.36908854284052, 13.629121208361738],
        [77.36420014829129, 13.621273108125413],
        [77.36264724871951, 13.612846313336997],
        [77.36291248940054, 13.60468452440675],
        [77.36441838816616, 13.599921056478593],
        [77.36504630148333, 13.592798272093631],
        [77.37107297371406, 13.589678190173993],
        [77.37628261380321, 13.588167125608933],
        [77.38233599144671, 13.575926200783885],
        [77.38361228604627, 13.570748205968355],
        [77.38343918217232, 13.555196426486697],
        [77.38451435498916, 13.544111276137116],
        [77.38801135546116, 13.537209536999653],
        [77.39093494752979, 13.535477588207554],
        [77.39315153362404, 13.532145210757283],
        [77.39348175964228, 13.525594451583673],
        [77.39129180935112, 13.519807844706214],
        [77.38553378348549, 13.515058742585943],
        [77.383647662535, 13.511849464023124],
        [77.38701262721541, 13.500015852704282],
        [77.40099212776028, 13.494000811089567],
        [77.40997242118154, 13.496956499023534],
        [77.41231869240872, 13.496658499127987],
        [77.41536032132014, 13.494749286302449],
        [77.41781093472636, 13.491353131453982],
        [77.4198385376977, 13.486407362062497],
        [77.42587243496824, 13.485066313216137],
        [77.42676355708879, 13.472211186524776],
        [77.4349574007666, 13.469194163070721],
        [77.4374584648286, 13.4639032135757],
        [77.44577969907078, 13.462096481018941],
        [77.45680475272273, 13.464296200044865],
        [77.45968631385703, 13.467727950449005],
        [77.46354346213072, 13.464619166033792],
        [77.47246855370972, 13.468655888892942],
        [77.48711580251563, 13.466420286792706],
        [77.49213754086662, 13.460898054961516],
        [77.49933525854405, 13.457368134053985],
        [77.50577226658324, 13.456425424078915],
        [77.50837536646232, 13.447634371705186],
        [77.51457431800935, 13.443417663399252],
        [77.51761946758218, 13.44219595062271],
        [77.52303697614788, 13.433220034449908],
        [77.52911829973486, 13.430850937503905],
        [77.53650758739283, 13.43110683356745],
        [77.53892075383116, 13.435292733952936],
        [77.55023344743367, 13.434553843670438],
        [77.5529619081971, 13.429612274997584],
        [77.55555522815226, 13.417254716969788],
        [77.57126439398756, 13.418110126025221],
        [77.59213483465338, 13.42078465291485],
        [77.59192429601542, 13.426474061316362],
        [77.59289476275289, 13.434969826733173],
        [77.60034979878108, 13.436656457506794],
        [77.60393354412868, 13.440776897743014],
        [77.61131494774412, 13.424672763136215],
        [77.6151655774083, 13.420463016317406],
        [77.61362416768202, 13.415309144326168],
        [77.60740363686588, 13.413947627686733],
        [77.60131384291861, 13.414261130444523],
        [77.60110346078342, 13.406916720407477],
        [77.60270302983297, 13.396569398078718],
        [77.60662224927906, 13.395981700013738],
        [77.60853078211275, 13.40384151594451],
        [77.61362106801171, 13.401702014494434],
        [77.61860391759343, 13.40121782204088],
        [77.61566631387485, 13.38520959253628],
        [77.62069896153399, 13.383411350761065],
        [77.62238551283363, 13.38162117198985],
        [77.62335668712704, 13.375246881973109],
        [77.63460536998912, 13.374681883709243],
        [77.64088768712952, 13.392514497595908],
        [77.64575557779722, 13.392090976546317],
        [77.6523796735049, 13.39270019725729],
        [77.65450230114044, 13.397107831548093],
        [77.6592538218782, 13.396861013472137],
        [77.65562876710135, 13.385741488124138],
        [77.6597844194659, 13.383879980124938],
        [77.66333456548342, 13.37852660123647],
        [77.66285602799569, 13.375200166262655],
        [77.6597218754234, 13.370506756028593],
        [77.65853854331559, 13.36574534416981],
        [77.65846031289517, 13.361489344899692],
        [77.65995324734857, 13.355232532542898],
        [77.66480570503899, 13.35262984416948],
        [77.66981805555398, 13.347266576068288],
        [77.68117626467993, 13.344859309478537],
        [77.68635493079104, 13.351327840120513],
        [77.69078894978611, 13.346716137889551],
        [77.69469124057241, 13.34038458310361],
        [77.6997647780874, 13.335141575295633],
        [77.70523662702053, 13.340854630757645],
        [77.70648040467557, 13.344292510590167],
        [77.70438633486235, 13.347577450024247],
        [77.70300661817498, 13.35355756022437],
        [77.70320869523677, 13.358660868732333],
        [77.71042430871115, 13.361625138747664],
        [77.71594455582368, 13.364927128879316],
        [77.71978761881607, 13.359337114197412],
        [77.71987393330397, 13.350613955187082],
        [77.73124320646785, 13.351995019188761],
        [77.73221343910954, 13.358599579750845],
        [77.73824669699555, 13.359721366620867],
        [77.74333257900687, 13.357060784088985],
        [77.74619441601857, 13.354061444992508],
        [77.74866814159338, 13.357953557364738],
        [77.75142275888375, 13.358116771240855],
        [77.7544844421018, 13.361317590336405],
        [77.76180604640689, 13.359965083008113],
        [77.77080343010455, 13.355331087213758],
        [77.78497134174611, 13.351302150578563],
        [77.79252094870282, 13.35098070195089],
        [77.79617966437817, 13.344248262523557],
        [77.80066702176596, 13.338367168959532],
        [77.81004098195987, 13.337977523588158],
        [77.81464263181896, 13.331991318532678],
        [77.82158950556948, 13.328284391580938],
        [77.82843381156417, 13.325779167658826],
        [77.82582567360558, 13.319883282827359],
        [77.82035034980012, 13.312958178359544],
        [77.81998477357246, 13.310316850622112],
        [77.81406672512503, 13.310344907059248],
        [77.8135363820911, 13.308906785112102],
        [77.81609585683434, 13.305108737489356],
        [77.82042280414, 13.303538093582207],
        [77.82856217573038, 13.303212451532836],
        [77.8309390008376, 13.297460206746083],
        [77.83114185673841, 13.290737071051879],
        [77.82450901348591, 13.289338378512099],
        [77.82336757170931, 13.295544165176162],
        [77.8190891193349, 13.294359850676196],
        [77.81604384705291, 13.28208293265015],
        [77.81378972568132, 13.27612499346177],
        [77.81394560317337, 13.27227497010893],
        [77.8112042377838, 13.261315434588727],
        [77.82201929434783, 13.257820002497278],
        [77.82141452950438, 13.253632376050541],
        [77.8176642738785, 13.253070243413626],
        [77.81027694761175, 13.240588319033368],
        [77.81384492618537, 13.238616892661048],
        [77.82250906859683, 13.24994640683339],
        [77.83455082876671, 13.245591893378599],
        [77.85162643687133, 13.240110729149896],
        [77.85000192306656, 13.220263030784343],
        [77.85608823377228, 13.217936398182452],
        [77.8639716943852, 13.238896568192244],
        [77.87249069654328, 13.232295622741766],
        [77.8770092857627, 13.232208299832996],
        [77.88031089218802, 13.23786033259577],
        [77.87552618786562, 13.240651521673636],
        [77.88071303355832, 13.248878459163231],
        [77.88599321046945, 13.249692573208064],
        [77.89210891298391, 13.255025734119686],
        [77.89961123080448, 13.25516719341319],
        [77.90469533774119, 13.252918718355437],
        [77.90666689401709, 13.24891187840965],
        [77.90469918417698, 13.241240390065544],
        [77.8956518214586, 13.236440681466561],
        [77.89247625460162, 13.233095127952655],
        [77.90213462870472, 13.232219025975082],
        [77.91206964394344, 13.228640922964967],
        [77.91604583119923, 13.23750118985044],
        [77.9256812148711, 13.238285183310362],
        [77.93388408046867, 13.257412685054165],
        [77.94563761030118, 13.277252706217801],
        [77.96551471173413, 13.29130608160311],
        [77.98938404267335, 13.307380506550489],
        [78.01362710815833, 13.297880473202666],
        [78.0238095612457, 13.288184193964431],
        [78.04790776694794, 13.288513248457757],
        [78.06980529798336, 13.30257993462614],
        [78.08788090812367, 13.302821335551961],
        [78.11806072178962, 13.299284653300022],
        [78.13008423323163, 13.301408778903719],
        [78.12186325553495, 13.315073323538623],
        [78.12170258444246, 13.326875953842],
        [78.13158656150152, 13.338809805323647],
        [78.14345488559768, 13.352736645394335],
        [78.14731464702334, 13.364592457416249],
        [78.13710866968292, 13.376267178780536],
        [78.1287504632551, 13.399772999662083],
        [78.14070332725929, 13.407799718737479],
        [78.16270790636925, 13.41595429342437],
        [78.18463738084618, 13.430008962707241],
        [78.20445835085354, 13.451907346830748],
        [78.20809596662707, 13.481477343733129],
        [78.19164637258419, 13.508830406160659],
        [78.19951214583203, 13.522709210771092],
        [78.20134400502387, 13.536512901659155],
        [78.19897211820356, 13.564046558150286],
        [78.19960438385083, 13.5661521931948],
      ],
    ],
  },
  properties: {
    DISTRICT: "Chikkaballapura",
    ST_NM: "Karnataka",
    ST_CEN_CD: 29,
    DT_CEN_CD: 28,
    censuscode: 582,
  },
};

// coordinate array with popup text
let points = [
  [13.7996, 77.7423, "Abakavaripalli","42B","4D"],
  [13.4484, 77.6507, "Motlur","42B","4D"],
  [13.7996, 77.7823, "Abakavaripalli","42B","4D"],
  [13.74547, 77.87571, "Achepalli","42B","4D"],
];

// config map
let config = {
  minZoom: 2,
  maxZoom: 17,
};
// magnification with which the map will start
const zoom = 5;
// co-ordinates
const lat = 21.593684;
const lng = 78.96288;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// --------------------------------------------------------------
// create seearch button

// add "random" button
const buttonTemplate = `<div class="leaflet-search" ><div class="auto-search-wrapper max-height"><input type="text" id="marker" autocomplete="off"  aria-describedby="instruction" aria-label="Search ..." /><div id="instruction" class="hidden">When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</div></div>`;

// create custom button
const customControl = L.Control.extend({
  // button position
  options: {
    position: "topleft",
    className: "leaflet-autocomplete",
  },

  // method
  onAdd: function () {
    return this._initialLayout();
  },

  _initialLayout: function () {
    // create button
    const container = L.DomUtil.create(
      "div",
      "leaflet-bar " + this.options.className
    );

    L.DomEvent.disableClickPropagation(container);

    container.innerHTML = buttonTemplate;

    return container;
  },
});

// adding new button to map controll
map.addControl(new customControl());

// --------------------------------------------------------------

// input element
const root = document.getElementById("marker");

function addClassToParent() {
  const searchBtn = document.querySelector(".leaflet-search");
  searchBtn.addEventListener("click", (e) => {
    // toggle class
    e.target
      .closest(".leaflet-autocomplete")
      .classList.toggle("active-autocomplete");

    // add placeholder
    root.placeholder = "Search ...";

    // focus on input
    root.focus();

    // click on clear button
    clickOnClearButton();
  });
}

// function click on clear button
function clickOnClearButton() {
  document.querySelector(".auto-clear").click();
}

addClassToParent();

// function clear input
map.on("click", () => {
  document
    .querySelector(".leaflet-autocomplete")
    .classList.remove("active-autocomplete");

  clickOnClearButton();
});

var currentCity;

// autocomplete section
// more config find in https://github.com/tomik23/autocomplete
// --------------------------------------------------------------

new Autocomplete("marker", {
  delay: 1000,
  selectFirst: true,
  howManyCharacters: 2,

  onSearch: function ({ currentValue }) {
    currentCity = currentValue;
    const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&q=${encodeURI(
      currentValue
    )}`;

    /**
     * Promise
     */
    return new Promise((resolve) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log("Testing");
          resolve(data.features);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },

  onResults: ({ currentValue, matches, template }) => {
    const regex = new RegExp(currentValue, "i");
    // checking if we have results if we don't
    // take data from the noResults method
    console.log(currentValue);
    return matches === 0
      ? template
      : matches
          .map((element) => {
            return `
              <li role="option">
                <p>${element.properties.display_name.replace(
                  regex,
                  (str) => `<b>${str}</b>`
                )}</p>
              </li> `;
          })
          .join("");
  },

  onSubmit: ({ object }) => {
    console.log(object);
    const { display_name } = object.properties;
    const cord = object.geometry.coordinates;
    // custom id for marker
    // const customId = Math.random();

    // remove last marker
    map.eachLayer(function (layer) {
      if (layer.options && layer.options.pane === "markerPane") {
        if (layer._icon.classList.contains("leaflet-marker-locate")) {
          map.removeLayer(layer);
        }
      }
    });

    // adding the province name to the visible div
    function addTextToDiv(text) {
      const markerPlace = document.querySelector(".marker-position");
      markerPlace.textContent = text;
    }

    // showing the name of the province
    function getVoivodeshipName(feature, layer) {
      if (feature.properties && feature.properties.nazwa) {
        layer.bindPopup(feature.properties.nazwa);
      }
    }

    // // adding geojson by fetch
    // // of course you can use jquery, axios etc.
    fetch("./2011_Dist.geojson")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let layer = new L.GeoJSON(DistData, {
          // A Function that will be called once for each
          // created Feature, after it has been created and styled
          onEachFeature: function (feature, layer) {
            layer.on("mouseover", function (e) {
              // bindPopup
              getVoivodeshipName(feature, layer);
              // show voivodeship
              addTextToDiv(feature.properties.nazwa);
              this.openPopup();
              // style
              this.setStyle({
                fillColor: "#eb4034",
                weight: 2,
                color: "#eb4034",
                fillOpacity: 0.7,
              });
            });
            layer.on("mouseout", function () {
              this.closePopup();
              // style
              this.setStyle({
                fillColor: "#FF069A",
                weight: 2,
                color: "#62ED32",
                fillOpacity: 0.2,
              });
            });
            layer.on("click", function () {
              // adding the province name to the visible div
              addTextToDiv(feature.properties.nazwa);
            });
          },
        }).addTo(map);
      });

    // Add markers to the layer

    // let markers = L.markerClusterGroup();

    // for (let i = 0; i < points.length; i++) {
    //   const [lat, lng, title] = points[i];

    //   let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(title);
    //   markers.addLayer(marker);
    // }

    // map.addLayer(markers);
//     const customPopup = `<div class="customPopup">
//     <ul class="tabs-example" data-tabs>
//       <h4>  <script></script>${points[i][2]}</h4>
//     </ul> 
//   </div>`;

// // specify popup options
// const customOptions = {
//   minWidth: "100", // set max-width
//   keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
// };

// // create marker object, pass custom icon as option, pass content and options to popup, add to map
// const marker = L.marker([50.0616, 19.9373])
//   .bindPopup(customPopup, customOptions)
//   .on("click", runTabs);

//     for (let i = 0; i < points.length; i++) {
//       L.marker([points[i][0], points[i][1]]).addTo(map).bindPopup(points[i][2]);
//     }
    const customPopup = `<div class="customPopup">
    <ul class="tabs-example" data-tabs>
      <li><a data-tabby-default href="#sukiennice">Village</a></li>
      <li><a href="#town-hall-tower">1 Household Individual</a></li>
    </ul>
    <div id="sukiennice">
      <figcaption> <b>Village Name: "Abakavaripalli" </b><br>
      <b>Building Name: "42B" </b><br>
      <b>Household Number: "4D" </b><br>
    </div>
    <div id="town-hall-tower">
    <figcaption> <b>Ind1: "Raghunath Rajan"</b><br> 
    <b>Ind1_Gender: "Male"</b><br>
    <b>Ind1_Caste: "General"</b><br>
    <b>Ind1_Marital_Status: "Never married"</b><br>
    <b>Ind1_Occupation: "Doctor"</b><br>
    <b>Ind1_Education: "Post graduate / M.B.A/ MCA/Equivalent or Higher"</b><br>    
    
    </div>
  </div>`;

// specify popup options
const customOptions = {
  minWidth: "220", // set max-width
  keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
};

// create marker object, pass custom icon as option, pass content and options to popup, add to map
   L.marker([13.7996, 77.7423]).bindPopup(customPopup, customOptions).on("click", runTabs).addTo(map);
//const marker = L.marker([50.0616, 19.9373])
 // .bindPopup(customPopup, customOptions)
  //.on("click", runTabs);

//marker.addTo(map);
function runTabs() {
  const tabs = new Tabby("[data-tabs]");
}


const customPopup1 = `<div class="customPopup">
    <ul class="tabs-example" data-tabs>
      <li><a data-tabby-default href="#sukiennice">Village</a></li>
      <li><a href="#town-hall-tower">3 Household Individual</a></li>
    </ul>
    <div id="sukiennice">
      <figcaption> <b>Village Name: "Motlur" </b><br>
      <b>Building Name: "68A" </b><br>
      <b>Household Number: "124C" </b><br>
    </div>
    <div id="town-hall-tower">
    <figcaption> <b>Ind1: "Teja Singh"</b><br> 
    <b>Ind1_Gender: "Female"</b><br>
    <b>Ind1_Caste: "General"</b><br>
    <b>Ind1_Marital_Status: "Never married"</b><br>
    <b>Ind1_Occupation: "Engineer"</b><br>
    <b>Ind1_Education: "Graduate / B.BA/ Equivalent /B.Tech"</b><br>
    ---------------------------------------------<br>
    <b>Ind2: "Raj Singh"</b><br>
    <b>Ind2_Gender: "Male"</b><br>
    <b>Ind2_Caste: "General"</b><br>
    <b>Ind2_Marital_Status: "Currently married"</b><br>
    <b>Ind2_Occupation: "Teacher"</b><br>
    <b>Ind2_Education: "Post graduate / M.B.A/ MCA/Equivalent or Higher"</b><br>
    ---------------------------------------------<br>
    <b>Ind3: "Lata Singh"</b><br>
    <b>Ind3_Gender: "Female"</b><br>
    <b>Ind3_Caste: "General"</b><br>
    <b>Ind3_Marital_Status: "Currently married"</b><br>
    <b>Ind3_Occupation: "Housewife"</b><br>
    <b>Ind3_Education: "Post graduate / M.B.A/ MCA/Equivalent or Higher"</b><br>
    
    </div>
  </div>`;

// specify popup options
const customOptions1 = {
  minWidth: "220", // set max-width
  keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
};

// create marker object, pass custom icon as option, pass content and options to popup, add to map
   L.marker([13.4484, 77.6507]).bindPopup(customPopup1, customOptions1).on("click", runTabs).addTo(map);
//const marker = L.marker([50.0616, 19.9373])
 // .bindPopup(customPopup, customOptions)
  //.on("click", runTabs);

//marker.addTo(map);
function runTabs() {
  const tabs = new Tabby("[data-tabs]");
}

const customPopup2 = `<div class="customPopup">
    <ul class="tabs-example" data-tabs>
      <li><a data-tabby-default href="#sukiennice">Village</a></li>
      <li><a href="#town-hall-tower">1 Household Individual</a></li>
    </ul>
    <div id="sukiennice">
      <figcaption> <b>Village Name: "Abakavaripalli" </b><br>
      <b>Building Name: "63" </b><br>
      <b>Household Number: "23" </b><br>
    </div>
    <div id="town-hall-tower">
    <figcaption> <b>Ind1: "Ankita"</b><br> 
    <b>Ind1_Gender: "Female"</b><br>
    <b>Ind1_Caste: "Brahmin"</b><br>
    <b>Ind1_Marital_Status: "Never married"</b><br>
    <b>Ind1_Occupation: "Unemployed"</b><br>
    <b>Ind1_Education: "Graduate / B.BA/ Equivalent /B.Tech"</b><br>    
    
    </div>
  </div>`;

// specify popup options
const customOptions2 = {
  minWidth: "220", // set max-width
  keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
};

// create marker object, pass custom icon as option, pass content and options to popup, add to map
   L.marker([13.7996, 77.7823]).bindPopup(customPopup2, customOptions2).on("click", runTabs).addTo(map);
//const marker = L.marker([50.0616, 19.9373])
 // .bindPopup(customPopup, customOptions)
  //.on("click", runTabs);

//marker.addTo(map);
function runTabs() {
  const tabs = new Tabby("[data-tabs]");
}


const customPopup3 = `<div class="customPopup">
    <ul class="tabs-example" data-tabs>
      <li><a data-tabby-default href="#sukiennice">Village</a></li>
      <li><a href="#town-hall-tower">1 Household Individual</a></li>
    </ul>
    <div id="sukiennice">
      <figcaption> <b>Village Name: "Achepalli" </b><br>
      <b>Building Name: "211" </b><br>
      <b>Household Number: "4" </b><br>
    </div>
    <div id="town-hall-tower">
    <figcaption> <b>Ind1: "Shreya Dey"</b><br> 
    <b>Ind1_Gender: "Female"</b><br>
    <b>Ind1_Caste: "General"</b><br>
    <b>Ind1_Marital_Status: "Never married"</b><br>
    <b>Ind1_Occupation: "Company authority"</b><br>
    <b>Ind1_Education: "Graduate / B.BA/ Equivalent /B.Tech"</b><br>    
    
    </div>
  </div>`;

// specify popup options
const customOptions3 = {
  minWidth: "220", // set max-width
  keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
};

// create marker object, pass custom icon as option, pass content and options to popup, add to map
   L.marker([13.74547, 77.87571]).bindPopup(customPopup3, customOptions3).on("click", runTabs).addTo(map);
//const marker = L.marker([50.0616, 19.9373])
 // .bindPopup(customPopup, customOptions)
  //.on("click", runTabs);

//marker.addTo(map);
function runTabs() {
  const tabs = new Tabby("[data-tabs]");
}

    //test 1

    // function onEachFeature(feature, layer) {
    //   layer.bindPopup(feature.properties.nazwa);
    // }

    // // adding geojson by fetch
    // // of course you can use jquery, axios etc.
    // fetch("./2011_Dist.geojson")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     // use geoJSON
    //     L.geoJSON(DistData, {
    //       onEachFeature: onEachFeature,
    //     }).addTo(map);
    //   });

    // add marker
    // const marker = L.marker([cord[1], cord[0]], {
    //   // title: display_name,
    //   title: "display_name",
    // });

    // add marker to map
    //marker.addTo(map).bindPopup("display_name");

    // set marker to coordinates
    map.setView([cord[1], cord[0]], 8);

    // add class to marker
    L.DomUtil.addClass(marker._icon, "leaflet-marker-locate");
  },

  // the method presents no results
  noResults: ({ currentValue, template }) =>
    template(`<li>No results found: "${currentValue}"</li>`),
});

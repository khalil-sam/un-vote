
const all_countries =  ['United States of America', 'Canada', 'Bahamas', 'Cuba', 'Haiti', 'Dominican Republic', 'Jamaica', 'Trinidad and Tobago', 'Barbados', 'Dominica', 'Grenada', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Antigua and Barbuda', 'Saint Kitts and Nevis', 'Mexico', 'Belize', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Colombia', 'Venezuela, Bolivarian Republic of', 'Guyana', 'Suriname', 'Ecuador', 'Peru', 'Brazil', 'Bolivia (Plurinational State of)', 'Paraguay', 'Chile', 'Argentina', 'Uruguay', 'United Kingdom of Great Britain and Northern Ireland', 'Ireland', 'Netherlands', 'Belgium', 'Luxembourg', 'France', 'Monaco', 'Liechtenstein', 'Switzerland', 'Spain', 'Andorra', 'Portugal', 'German Federal Republic', 'German Democratic Republic', 'Poland', 'Austria', 'Hungary', 'Czechoslovakia', 'Czech Republic', 'Slovakia', 'Italy', 'San Marino', 'Malta', 'Albania', 'The former Yugoslav Republic of Macedonia', 'Croatia', 'Yugoslavia', 'Bosnia and Herzegovina', 'Slovenia', 'Greece', 'Cyprus', 'Bulgaria', 'Republic of Moldova', 'Romania', 'Russian Federation', 'Estonia', 'Latvia', 'Lithuania', 'Ukraine', 'Belarus', 'Armenia', 'Georgia', 'Azerbaijan', 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Cabo Verde', 'Sao Tome and Principe', 'Guinea Bissau', 'Equatorial Guinea', 'Gambia (Islamic Republic of the)', 'Mali', 'Senegal', 'Benin', 'Mauritania', 'Niger', "Cote D'Ivoire", 'Guinea', 'Burkina Faso', 'Liberia', 'Sierra Leone', 'Ghana', 'Togo', 'Cameroon', 'Nigeria', 'Gabon', 'Central African Republic', 'Chad', 'Congo', 'Democratic Republic of the Congo', 'Uganda', 'Kenya', 'United Republic of Tanzania', 'Zanzibar', 'Burundi', 'Rwanda', 'Somalia', 'Djibouti', 'Ethiopia', 'Eritrea', 'Angola', 'Mozambique', 'Zambia', 'Zimbabwe', 'Malawi', 'South Africa', 'Namibia', 'Lesotho', 'Botswana', 'Swaziland', 'Madagascar', 'Comoros', 'Mauritius', 'Seychelles', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Sudan', 'South Sudan', 'Iran (Islamic Republic of)', 'Turkey', 'Iraq', 'Egypt', 'Syrian Arab Republic', 'Lebanon', 'Jordan', 'Israel', 'Saudi Arabia', 'Yemen Arab Republic', "Yemen People's Republic", 'Kuwait', 'Bahrain', 'Qatar', 'United Arab Emirates', 'Oman', 'Afghanistan', 'Turkmenistan', 'Tajikistan', 'Kyrgyzstan', 'Uzbekistan', 'Kazakhstan', 'China', 'Mongolia', 'Taiwan, Province of China', "Democratic People's Republic of Korea", 'Republic of Korea', 'Japan', 'India', 'Bhutan', 'Pakistan', 'Bangladesh', 'Myanmar', 'Sri Lanka', 'Maldives', 'Nepal', 'Thailand', 'Cambodia', "Lao People's Democratic Republic", 'Viet Nam', 'Malaysia', 'Singapore', 'Brunei Darussalam', 'Philippines', 'Indonesia', 'Timor-Leste', 'Australia', 'Papua New Guinea', 'New Zealand', 'Vanuatu', 'Solomon Islands', 'Kiribati', 'Tuvalu', 'Fiji', 'Tonga', 'Nauru', 'Marshall Islands', 'Palau', 'Micronesia (Federated States of)', 'Samoa', 'Germany', 'Yemen', 'Montenegro', 'Serbia', 'Serbia and Montenegro' ]
const google_countries =  [
     'Afghanistan' ,	 //	AF
     'Åland Islands' ,	 //	AX
     'Albania' ,	 //	AL
     'Algeria' ,	 //	DZ
     'American Samoa' ,	 //	AS
     'Andorra' ,	 //	AD
     'Angola' ,	 //	AO
     'Anguilla' ,	 //	AI
     'Antarctica' ,	 //	AQ
     'Antigua and Barbuda' ,	 //	AG
     'Argentina' ,	 //	AR
     'Armenia' ,	 //	AM
     'Aruba' ,	 //	AW
     'Australia' ,	 //	AU
     'Austria' ,	 //	AT
     'Azerbaijan' ,	 //	AZ
     'Bahamas' ,	 //	BS
     'Bahrain' ,	 //	BH
     'Bangladesh' ,	 //	BD
     'Barbados' ,	 //	BB
     'Belarus' ,	 //	BY
     'Belgium' ,	 //	BE
     'Belize' ,	 //	BZ
     'Benin' ,	 //	BJ
     'Bermuda' ,	 //	BM
     'Bhutan' ,	 //	BT
     'Bolivia (Plurinational State of)' ,	 //	BO
     'Bonaire, Sint Eustatius and Saba' ,	 //	BQ
     'Bosnia and Herzegovina' ,	 //	BA
     'Botswana' ,	 //	BW
     'Bouvet Island' ,	 //	BV
     'Brazil' ,	 //	BR
     'British Indian Ocean Territory' ,	 //	IO
     'Brunei Darussalam' ,	 //	BN
     'Bulgaria' ,	 //	BG
     'Burkina Faso' ,	 //	BF
     'Burundi' ,	 //	BI
     'Cabo Verde' ,	 //	CV
     'Cambodia' ,	 //	KH
     'Cameroon' ,	 //	CM
     'Canada' ,	 //	CA
     'Cayman Islands' ,	 //	KY
     'Central African Republic' ,	 //	CF
     'Chad' ,	 //	TD
     'Chile' ,	 //	CL
     'China' ,	 //	CN
     'Christmas Island' ,	 //	CX
     'Cocos (Keeling) Islands' ,	 //	CC
     'Colombia' ,	 //	CO
     'Comoros' ,	 //	KM
     'Congo' ,	 //	CG
     'Congo (Democratic Republic of the)' ,	 //	CD
     'Cook Islands' ,	 //	CK
     'Costa Rica' ,	 //	CR
     'Côte d\'Ivoire' ,	 //	CI
     'Croatia' ,	 //	HR
     'Cuba' ,	 //	CU
     'Curaçao' ,	 //	CW
     'Cyprus' ,	 //	CY
     'Czechia' ,	 //	CZ
     'Denmark' ,	 //	DK
     'Djibouti' ,	 //	DJ
     'Dominica' ,	 //	DM
     'Dominican Republic' ,	 //	DO
     'Ecuador' ,	 //	EC
     'Egypt' ,	 //	EG
     'El Salvador' ,	 //	SV
     'Equatorial Guinea' ,	 //	GQ
     'Eritrea' ,	 //	ER
     'Estonia' ,	 //	EE
     'Ethiopia' ,	 //	ET
     'Falkland Islands (Malvinas)' ,	 //	FK
     'Faroe Islands' ,	 //	FO
     'Fiji' ,	 //	FJ
     'Finland' ,	 //	FI
     'France' ,	 //	FR
     'French Guiana' ,	 //	GF
     'French Polynesia' ,	 //	PF
     'French Southern Territories' ,	 //	TF
     'Gabon' ,	 //	GA
     'Gambia' ,	 //	GM
     'Georgia' ,	 //	GE
     'Germany' ,	 //	DE
     'Ghana' ,	 //	GH
     'Gibraltar' ,	 //	GI
     'Greece' ,	 //	GR
     'Greenland' ,	 //	GL
     'Grenada' ,	 //	GD
     'Guadeloupe' ,	 //	GP
     'Guam' ,	 //	GU
     'Guatemala' ,	 //	GT
     'Guernsey' ,	 //	GG
     'Guinea' ,	 //	GN
     'Guinea-Bissau' ,	 //	GW
     'Guyana' ,	 //	GY
     'Haiti' ,	 //	HT
     'Heard Island and McDonald Islands' ,	 //	HM
     'Holy See' ,	 //	VA
     'Honduras' ,	 //	HN
     'Hong Kong' ,	 //	HK
     'Hungary' ,	 //	HU
     'Iceland' ,	 //	IS
     'India' ,	 //	IN
     'Indonesia' ,	 //	ID
     'Iran (Islamic Republic of)' ,	 //	IR
     'Iraq' ,	 //	IQ
     'Ireland' ,	 //	IE
     'Isle of Man' ,	 //	IM
     'Israel' ,	 //	IL
     'Italy' ,	 //	IT
     'Jamaica' ,	 //	JM
     'Japan' ,	 //	JP
     'Jersey' ,	 //	JE
     'Jordan' ,	 //	JO
     'Kazakhstan' ,	 //	KZ
     'Kenya' ,	 //	KE
     'Kiribati' ,	 //	KI
     'Korea (Democratic People\'s Republic of)' ,	 //	KP
     'Korea (Republic of)' ,	 //	KR
     'Kuwait' ,	 //	KW
     'Kyrgyzstan' ,	 //	KG
     'Lao People\'s Democratic Republic' ,	 //	LA
     'Latvia' ,	 //	LV
     'Lebanon' ,	 //	LB
     'Lesotho' ,	 //	LS
     'Liberia' ,	 //	LR
     'Libya' ,	 //	LY
     'Liechtenstein' ,	 //	LI
     'Lithuania' ,	 //	LT
     'Luxembourg' ,	 //	LU
     'Macao' ,	 //	MO
     'Macedonia (the former Yugoslav Republic of)' ,	 //	MK
     'Madagascar' ,	 //	MG
     'Malawi' ,	 //	MW
     'Malaysia' ,	 //	MY
     'Maldives' ,	 //	MV
     'Mali' ,	 //	ML
     'Malta' ,	 //	MT
     'Marshall Islands' ,	 //	MH
     'Martinique' ,	 //	MQ
     'Mauritania' ,	 //	MR
     'Mauritius' ,	 //	MU
     'Mayotte' ,	 //	YT
     'Mexico' ,	 //	MX
     'Micronesia (Federated States of)' ,	 //	FM
     'Moldova (Republic of)' ,	 //	MD
     'Monaco' ,	 //	MC
     'Mongolia' ,	 //	MN
     'Montenegro' ,	 //	ME
     'Montserrat' ,	 //	MS
     'Morocco' ,	 //	MA
     'Mozambique' ,	 //	MZ
     'Myanmar' ,	 //	MM
     'Namibia' ,	 //	NA
     'Nauru' ,	 //	NR
     'Nepal' ,	 //	NP
     'Netherlands' ,	 //	NL
     'New Caledonia' ,	 //	NC
     'New Zealand' ,	 //	NZ
     'Nicaragua' ,	 //	NI
     'Niger' ,	 //	NE
     'Nigeria' ,	 //	NG
     'Niue' ,	 //	NU
     'Norfolk Island' ,	 //	NF
     'Northern Mariana Islands' ,	 //	MP
     'Norway' ,	 //	NO
     'Oman' ,	 //	OM
     'Pakistan' ,	 //	PK
     'Palau' ,	 //	PW
     'Palestine, State of' ,	 //	PS
     'Panama' ,	 //	PA
     'Papua New Guinea' ,	 //	PG
     'Paraguay' ,	 //	PY
     'Peru' ,	 //	PE
     'Philippines' ,	 //	PH
     'Pitcairn' ,	 //	PN
     'Poland' ,	 //	PL
     'Portugal' ,	 //	PT
     'Puerto Rico' ,	 //	PR
     'Qatar' ,	 //	QA
     'Réunion' ,	 //	RE
     'Romania' ,	 //	RO
     'Russian Federation' ,	 //	RU
     'Rwanda' ,	 //	RW
     'Saint Barthélemy' ,	 //	BL
     'Saint Helena, Ascension and Tristan da Cunha' ,	 //	SH
     'Saint Kitts and Nevis' ,	 //	KN
     'Saint Lucia' ,	 //	LC
     'Saint Martin (French part)' ,	 //	MF
     'Saint Pierre and Miquelon' ,	 //	PM
     'Saint Vincent and the Grenadines' ,	 //	VC
     'Samoa' ,	 //	WS
     'San Marino' ,	 //	SM
     'Sao Tome and Principe' ,	 //	ST
     'Saudi Arabia' ,	 //	SA
     'Senegal' ,	 //	SN
     'Serbia' ,	 //	RS
     'Seychelles' ,	 //	SC
     'Sierra Leone' ,	 //	SL
     'Singapore' ,	 //	SG
     'Sint Maarten (Dutch part)' ,	 //	SX
     'Slovakia' ,	 //	SK
     'Slovenia' ,	 //	SI
     'Solomon Islands' ,	 //	SB
     'Somalia' ,	 //	SO
     'South Africa' ,	 //	ZA
     'South Georgia and the South Sandwich Islands' ,	 //	GS
     'South Sudan' ,	 //	SS
     'Spain' ,	 //	ES
     'Sri Lanka' ,	 //	LK
     'Sudan' ,	 //	SD
     'Suriname' ,	 //	SR
     'Svalbard and Jan Mayen' ,	 //	SJ
     'Swaziland' ,	 //	SZ
     'Sweden' ,	 //	SE
     'Switzerland' ,	 //	CH
     'Syrian Arab Republic' ,	 //	SY
     'Taiwan, Province of China a ' ,	 //	TW
     'Tajikistan' ,	 //	TJ
     'Tanzania, United Republic of' ,	 //	TZ
     'Thailand' ,	 //	TH
     'Timor-Leste' ,	 //	TL
     'Togo' ,	 //	TG
     'Tokelau' ,	 //	TK
     'Tonga' ,	 //	TO
     'Trinidad and Tobago' ,	 //	TT
     'Tunisia' ,	 //	TN
     'Turkey' ,	 //	TR
     'Turkmenistan' ,	 //	TM
     'Turks and Caicos Islands' ,	 //	TC
     'Tuvalu' ,	 //	TV
     'Uganda' ,	 //	UG
     'Ukraine' ,	 //	UA
     'United Arab Emirates' ,	 //	AE
     'United Kingdom of Great Britain and Northern Ireland' ,	 //	GB
     'United States of America' ,	 //	US
     'United States Minor Outlying Islands' ,	 //	UM
     'Uruguay' ,	 //	UY
     'Uzbekistan' ,	 //	UZ
     'Vanuatu' ,	 //	VU
     'Venezuela (Bolivarian Republic of)' ,	 //	VE
     'Viet Nam' ,	 //	VN
     'Virgin Islands (British)' ,	 //	VG
     'Virgin Islands (U.S.)' ,	 //	VI
     'Wallis and Futuna' ,	 //	WF
     'Western Sahara' ,	 //	EH
     'Yemen' ,	 //	YE
    'Zambia',	 //	ZM
    'Zimbabwe'	 //	ZW
]
   
arr1 = all_countries;
arr2 = google_countries;

//let intersection = arr1.filter(x => arr2.includes(x));
let unique_dataset = arr1.filter(x => !arr2.includes(x));
let unique_google = arr2.filter(x => !arr1.includes(x));

/*let difference2 = arr1
.filter(x => !arr2.includes(x))
.concat(arr2.filter(x => !arr1.includes(x)));*/


//console.log('intersection:',intersection);
console.log('unique_dataset',unique_dataset)
console.log('unique_google:',unique_google)

exports.all_countries = all_countries;

const goneCountries =
['German Democratic Republic', 
'Czechoslovakia',
'Yugoslavia',
'Serbia and Montenegro',
'Zanzibar',
'Yemen Arab Republic',
"Yemen People's Republic",
];

const countryChanges =
[('Venezuela, Bolivarian Republic of','Venezuela (Bolivarian Republic of)'),
('German Federal Republic','Germany'),
('Czech Republic','Czechia'),
('The former Yugoslav Republic of Macedonia','Macedonia (the former Yugoslav Republic of'),
('Republic of Moldova','Moldova (Republic of)'),
('Guinea Bissau','Guinea-Bissau'),
('Gambia (Islamic Republic of the)','Gambia'),
("Cote D'Ivoire","Côte d'Ivoire"),
('Democratic Republic of the Congo','Congo (Democratic Republic of the)'),
('United Republic of Tanzania','Tanzania, United Republic of'),
('Taiwan, Province of China','Taiwan, Province of China a '),
("Democratic People's Republic of Korea","Korea (Democratic People's Republic of)"),
('Republic of Korea','Korea (Republic of)')];

const convertNameToGoogle = (dataName) => {

  if (goneCountries.includes(dataName)) {
    return null;
  }

  let result = null;
  countryChanges.forEach(pair => {
    if (pair[0] == dataName) {
      result = pair[1];
      return;
    }
  });
  if(result) {
    return result;
  }

  return dataName;
}

// module.exports = mongoose.model("resolutions", resolutionsSchema);


// from the differences the czech republic worked
// old countries:
//  
/* 'Yemen Arab Republic',
"Yemen People's Republic", */
  /* 'Yugoslavia', */
    /* ['German Federal Republic', 522],
  ['German Democratic Republic',543],
  'Czechoslovakia', 
    // Zanzibar 
    'Serbia and Montenegro' 
*/

  // changes:
  // 'Venezuela, Bolivarian Republic of' => Venezuela
  // 'The former Yugoslav Republic of Macedonia' => Macedonia
  // 'Republic of Moldova' => Maldova
    // Guinea Bissau => Guinea-Bissau
    // 'Taiwan, Province of China' => Taiwan 


  // 'Gambia (Islamic Republic of the)' => we don't know => GM
  //  Cote d'ivoire => We don't know => CI
  // Democratic Republic of the Congo => we don't know => CD
  // "Democratic People's Republic of Korea" => we don't know => KP
  // 'Republic of Korea' => we don't know => KR


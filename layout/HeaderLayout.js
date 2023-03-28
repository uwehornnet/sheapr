import Link from "next/link";
import CategorySlider from "../components/CategorySlider";
import NavBar from "../components/Navbar";

const HeaderLayout = ({ children }) => {
	return (
		<header>
			<div className="bg-blue-900 flex items-center justify-between py-4 px-4 md:px-6">
				<div className="logo">
					<Link href="/" className="m-0 border-none block text-teal-400 max-w-[60px] md:max-w-none">
						<svg height="32" viewBox="0 0 221 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M26.3827 0.311453C26.2853 0.260668 26.0861 0.180258 25.9379 0.133705C25.1159 -0.132917 24.6753 -0.0313467 23.4 0.717733C23.1797 0.848928 22.828 1.05207 22.6204 1.17057C22.2772 1.36948 21.7688 1.67419 21.5993 1.78422C21.5876 1.79073 21.5594 1.80685 21.5196 1.82962C21.4301 1.88089 21.2816 1.96586 21.1291 2.05084C20.9087 2.17357 20.6503 2.3217 20.5528 2.38518C20.4554 2.44443 20.2817 2.546 20.1758 2.60525C20.0656 2.66873 19.875 2.77876 19.7521 2.85071C19.695 2.88218 19.625 2.92188 19.5563 2.96089C19.4772 3.00581 19.3998 3.0498 19.3454 3.07924C18.8496 3.35433 18.4217 3.59979 18.015 3.84102C17.5489 4.12033 17.3879 4.21344 17.0575 4.40388C16.3711 4.789 15.4475 5.32225 14.5916 5.82587C14.4617 5.90325 14.2551 6.02333 14.0423 6.14703C13.8943 6.23305 13.7433 6.32082 13.6129 6.3972C13.2952 6.57918 12.8545 6.8331 12.6342 6.9643C12.4139 7.09549 12.0834 7.28594 11.9012 7.38751C11.7148 7.49331 11.3674 7.69645 11.1217 7.84034C10.8992 7.97446 10.6072 8.13979 10.4376 8.23583C10.4199 8.24587 10.4035 8.25515 10.3887 8.26355C10.2277 8.34819 10.0667 8.4413 10.0328 8.47092C9.99467 8.50478 9.87604 8.57673 9.77012 8.63174C9.40576 8.83065 9.16426 8.97031 8.6516 9.27079C8.0881 9.60512 7.68984 9.83789 6.78316 10.3584C6.67231 10.4223 6.54667 10.4943 6.42002 10.5669C6.16909 10.7106 5.91413 10.8567 5.76208 10.9467C5.52906 11.0821 5.06724 11.3487 4.73677 11.5392C4.4063 11.7296 3.88517 12.0301 3.58012 12.2079C2.89363 12.6112 2.43934 12.8716 2.23931 12.9863C2.20848 13.0039 2.18369 13.0181 2.16502 13.0289C1.16089 13.5833 0.580445 14.0361 0.351657 14.4424C0.288104 14.5567 0.182184 14.7894 0.118631 14.9587L0 15.2719V18.6025V21.9374L0.105921 22.2675C0.292341 22.86 0.584682 23.3002 0.999891 23.6091C1.8642 24.2482 3.10136 24.1466 3.88517 23.3721C4.19022 23.0716 4.33851 22.8304 4.49951 22.3818C4.60967 22.0729 4.6139 22.0517 4.6478 19.9568C4.68169 17.8789 4.68593 17.8408 4.79609 17.4853C4.85964 17.2864 4.92743 17.0832 4.95709 17.0324C5.01217 16.9266 5.40195 16.6135 5.67311 16.4569C5.77903 16.3934 5.96545 16.2791 6.07561 16.1987C6.19 16.1225 6.36795 16.0083 6.47387 15.9533C6.49446 15.9417 6.51777 15.9288 6.54277 15.9149C6.64641 15.8573 6.77915 15.7835 6.8679 15.729C6.98229 15.6612 7.15176 15.5681 7.24921 15.5216C7.34666 15.4708 7.48647 15.3946 7.56274 15.3523C8.07539 15.0434 8.3296 14.9037 8.41857 14.8741C8.45905 14.8615 8.49252 14.8384 8.52018 14.844C8.66047 14.8724 8.6516 15.6388 8.6516 22.2633C8.6516 26.5716 8.66855 29.6441 8.69397 29.7329C8.78718 30.0884 8.95665 30.5286 9.06681 30.6936C9.45236 31.2861 9.72352 31.5231 10.5328 31.9887C11.27 32.4119 11.4055 32.488 11.7996 32.6954C11.9902 32.797 12.2656 32.9493 12.4097 33.0382C12.4509 33.0617 12.517 33.0993 12.6002 33.1466C12.8162 33.2695 13.1472 33.4577 13.4562 33.6349C13.8841 33.8804 14.4899 34.2274 14.8035 34.4052C15.117 34.5872 15.4644 34.7861 15.583 34.8495C15.6974 34.913 15.9728 35.0696 16.1932 35.2008C16.2984 35.2615 16.4124 35.3279 16.5133 35.3868C16.6237 35.4511 16.7185 35.5064 16.7694 35.5351C17.0744 35.7044 18.6547 36.6186 19.0827 36.8725C19.3157 37.0121 19.9639 37.3803 20.1292 37.4692C20.1556 37.4857 20.1891 37.5061 20.2244 37.5275C20.2797 37.5611 20.3394 37.5974 20.3834 37.6258C20.5317 37.7274 20.7096 37.8289 20.9511 37.9559C21.0486 38.0067 21.2392 38.1167 21.3748 38.1971C21.5104 38.2818 21.7815 38.4426 21.9764 38.5569C22.1062 38.633 22.3263 38.7617 22.5464 38.8904C22.6568 38.9549 22.7671 39.0195 22.8662 39.0774C23.8194 39.636 23.9211 39.6911 24.1965 39.7969C24.5821 39.9534 24.8151 39.9958 25.2261 40C25.6582 40 25.9802 39.945 26.3149 39.8096C26.5649 39.708 27.3402 39.2932 27.6919 39.0647C27.8021 38.9928 27.9503 38.9039 28.0266 38.8658C28.0986 38.8319 28.2808 38.7261 28.4249 38.6373C28.5732 38.5484 28.7681 38.4341 28.857 38.3833C28.8847 38.3676 28.9242 38.3448 28.9704 38.3182C29.0731 38.2592 29.2092 38.1809 29.3231 38.1167C29.436 38.0519 29.6242 37.9419 29.8124 37.8319C29.9066 37.7769 30.0009 37.7218 30.0857 37.6724C30.3357 37.5242 30.6323 37.3507 30.7424 37.2872C30.8483 37.228 31.0898 37.0883 31.2763 36.9783L31.3624 36.9277C31.7358 36.7083 31.9314 36.5933 32.4244 36.3096C32.4888 36.2734 32.5467 36.2408 32.5993 36.2112C33.062 35.9507 33.1016 35.9284 33.3565 35.7764C33.5006 35.6917 33.704 35.5732 33.8141 35.5098C34.5174 35.1119 35.6317 34.4729 36.1444 34.1766C36.4748 33.9862 36.8265 33.7873 36.9239 33.7365C37.0214 33.6857 37.1993 33.5841 37.3222 33.5122C37.3692 33.4863 37.423 33.4561 37.4766 33.426C37.563 33.3774 37.6486 33.3293 37.7035 33.3006C37.7883 33.254 38.0594 33.0975 38.3009 32.9578C38.5466 32.8181 38.8856 32.6277 39.0593 32.5346C39.2288 32.4415 39.4915 32.2934 39.6355 32.2087C39.7838 32.1198 39.9702 32.014 40.0507 31.976C40.288 31.8659 40.8218 31.4723 41.0506 31.2353C41.415 30.8587 41.6777 30.372 41.7963 29.8472C41.8344 29.6864 41.8514 27.7481 41.8598 22.8897C41.8726 16.1437 41.8895 15.4158 42.0293 15.1238C42.1098 14.9587 42.1734 14.9799 43.7071 15.6824C44.457 16.021 44.796 16.241 45.1773 16.6219C45.4145 16.8632 45.495 16.9817 45.6094 17.2779C45.8128 17.7773 45.8425 18.0989 45.8848 20.0711C45.9272 21.9374 45.9569 22.1914 46.1729 22.6484C46.4695 23.2663 46.7915 23.6006 47.3381 23.8588C47.5838 23.9731 47.6346 23.9815 48.249 23.9815H48.893L49.2319 23.8165C49.5624 23.6514 49.842 23.4102 50.1132 23.0505C50.1852 22.9574 50.2488 22.8558 50.2488 22.8304C50.2488 22.8008 50.2827 22.7077 50.3293 22.623C50.4437 22.4114 50.5453 21.8613 50.575 21.2899C50.5919 21.036 50.6047 19.6817 50.6047 18.2851C50.6047 16.131 50.5962 15.6866 50.5369 15.3735C50.3589 14.4678 49.7954 13.8076 48.6557 13.1685C47.6389 12.5972 46.8932 12.174 46.7788 12.0978C46.6475 12.0174 45.7916 11.5223 45.0205 11.0906C44.7239 10.9255 44.4358 10.7563 44.3765 10.7139C44.313 10.6716 44.0545 10.5193 43.8003 10.3754C43.5461 10.2315 43.2241 10.0495 43.0885 9.97332C42.9972 9.91912 42.875 9.84955 42.7713 9.79051C42.7212 9.76195 42.6753 9.73586 42.6394 9.71516C42.4488 9.60936 42.1395 9.43161 41.9488 9.32157C41.9204 9.30351 41.851 9.26183 41.7695 9.21286C41.7173 9.18154 41.6602 9.14722 41.6056 9.1142C41.4658 9.02956 41.2625 8.91106 41.1523 8.84758C40.9616 8.74178 40.3642 8.39898 39.9956 8.18314C39.8897 8.12389 39.7033 8.01809 39.5847 7.94614C39.466 7.87843 39.2966 7.78109 39.2034 7.72608C39.1364 7.68468 38.9423 7.57381 38.7276 7.45114C38.657 7.41077 38.5841 7.36913 38.5128 7.32826C38.2247 7.16321 37.8815 6.96007 37.7459 6.87543C37.6103 6.79078 37.2417 6.57495 36.9282 6.3972C36.7267 6.2845 36.515 6.16329 36.36 6.07457C36.2706 6.02336 36.2001 5.98298 36.1613 5.96129C36.1153 5.93556 36.0421 5.89304 35.9574 5.84382C35.847 5.77974 35.7171 5.70428 35.6021 5.63966C35.3987 5.52116 35.153 5.37727 35.0555 5.31802C34.9988 5.28355 34.9163 5.23478 34.8364 5.1875C34.7789 5.1535 34.7227 5.12027 34.6784 5.09372C34.5683 5.03023 34.3818 4.92443 34.2632 4.86095C34.1446 4.79324 33.8946 4.64935 33.7082 4.53508C33.6054 4.47576 33.4583 4.3894 33.3081 4.30116C33.1796 4.22571 33.0487 4.1489 32.9413 4.08648C32.7083 3.95105 32.3397 3.73521 32.1194 3.60402C31.8991 3.47282 31.6491 3.32893 31.5644 3.28238C31.4754 3.23583 31.3144 3.14272 31.2085 3.07078C31.0983 2.99883 30.9246 2.89726 30.8272 2.84648C30.645 2.75337 30.3865 2.60948 30.0433 2.40211C29.5137 2.0847 29.0307 1.80538 28.8952 1.7292C28.8062 1.68265 28.5562 1.53876 28.3359 1.40756C28.1156 1.27637 27.7766 1.07746 27.5817 0.967427C27.4683 0.900915 27.3319 0.821499 27.2135 0.752547C27.1284 0.70304 27.0526 0.658927 27.0013 0.62886C26.8784 0.552682 26.7301 0.472272 26.6708 0.44688C26.6073 0.421487 26.4802 0.362238 26.3827 0.311453ZM23.15 6.38876C24.3279 5.72856 24.5651 5.61006 24.8024 5.55927C25.0312 5.51272 25.3828 5.51272 25.6497 5.5635C25.8743 5.60583 26.5098 5.89361 27.031 6.19409C27.1665 6.2745 27.5097 6.46494 27.7851 6.61729C28.0647 6.77388 28.3232 6.91777 28.3613 6.93893C28.3952 6.96009 28.5943 7.07436 28.8019 7.19286C28.9211 7.26227 29.0591 7.34039 29.1734 7.40511C29.2543 7.45088 29.3233 7.48995 29.3654 7.5145C29.4714 7.57798 29.895 7.81498 30.306 8.04351C30.717 8.27627 31.0814 8.49211 31.1237 8.52597C31.1619 8.55982 31.2635 8.62331 31.344 8.66563C31.3791 8.68491 31.4353 8.71508 31.5011 8.75042C31.5942 8.80042 31.7066 8.86077 31.8059 8.91532C31.9796 9.00419 32.1872 9.12692 32.2761 9.18194C32.3434 9.22562 32.5522 9.34931 32.7817 9.48526C32.8413 9.52056 32.9023 9.55669 32.9625 9.59245C33.2591 9.76174 33.5684 9.94372 33.6531 9.99873C33.7379 10.0495 33.8692 10.1215 33.9412 10.1553C34.0598 10.2103 34.2505 10.3161 34.8182 10.642C34.8798 10.6801 35.0529 10.7769 35.2533 10.889C35.3426 10.9389 35.4373 10.9919 35.53 11.0441C36.1274 11.3784 36.2376 11.4503 36.5553 11.7085C36.8053 11.9116 37.0553 12.301 37.1273 12.6057C37.1866 12.8596 37.1866 26.5166 37.1273 27.1048C37.0595 27.7608 36.6486 28.3999 36.0766 28.73C35.8478 28.8612 35.6741 28.967 35.3648 29.1659C35.272 29.2263 35.0718 29.3442 34.9102 29.4394L34.886 29.4537C34.7208 29.5468 34.4793 29.6864 34.3522 29.7668C34.2932 29.8022 34.2086 29.8521 34.118 29.9057C34.0134 29.9675 33.9007 30.034 33.8099 30.0885C33.6362 30.19 33.4074 30.3297 33.2972 30.4016C33.1871 30.4736 33.0557 30.5498 33.0091 30.5752C32.9583 30.5963 32.7888 30.6979 32.632 30.7952C32.471 30.8968 32.2719 31.0153 32.1872 31.0618C32.0389 31.1423 31.2212 31.6078 30.4119 32.0776C30.2983 32.1414 30.1688 32.2158 30.0582 32.2794C29.9708 32.3296 29.8952 32.373 29.8484 32.3992C29.7383 32.4627 29.3909 32.6616 29.0689 32.8436C28.7511 33.0298 28.3867 33.2371 28.2596 33.3049C28.1832 33.3467 28.0924 33.3972 28.0132 33.4412C27.9563 33.4729 27.9053 33.5012 27.8698 33.5207C27.8302 33.5425 27.772 33.5754 27.7087 33.6111C27.6367 33.6518 27.5582 33.6963 27.4928 33.7323C27.3699 33.8042 27.2216 33.8847 27.1623 33.91C27.1072 33.9354 27.0013 33.9989 26.9335 34.0455C26.8657 34.0963 26.603 34.2359 26.3531 34.3671L25.8912 34.5956L25.3277 34.6168C24.9746 34.6273 24.8411 34.6313 24.7182 34.5972C24.6436 34.5764 24.5729 34.5416 24.4592 34.4856C24.294 34.4052 23.9465 34.2232 23.6881 34.0751C23.4339 33.9312 23.0568 33.7238 22.8534 33.618C22.6543 33.5122 22.3832 33.3599 22.256 33.2837C22.2249 33.2655 22.1954 33.2483 22.1671 33.2318C21.8537 33.0487 21.6895 32.9528 20.9977 32.5685C20.6037 32.3484 20.2647 32.1537 20.2393 32.1368C20.2186 32.1195 20.136 32.0714 20.0396 32.0152C20.0177 32.0024 19.9951 31.9893 19.9724 31.976C19.7436 31.849 19.1166 31.4893 18.7776 31.2904C18.6718 31.2312 18.4182 31.0834 18.215 30.965L18.2141 30.9645C18.0065 30.846 17.6591 30.6429 17.4388 30.5117C17.2826 30.4217 17.0647 30.2934 16.8816 30.1856C16.8064 30.1414 16.7371 30.1006 16.6804 30.0673C16.5134 29.973 16.2408 29.8105 16.0275 29.6833C15.9918 29.662 15.9578 29.6417 15.9262 29.6229C15.8257 29.563 15.7189 29.4996 15.6245 29.4436C15.5121 29.3768 15.4173 29.3204 15.3712 29.2928C15.2822 29.242 15.1212 29.1405 15.0153 29.0685C14.9052 28.9924 14.7314 28.895 14.634 28.8442C13.9222 28.476 13.6807 28.1925 13.4519 27.4688L13.346 27.1345V20.1346V13.1389L13.4519 12.8258C13.6765 12.1698 13.9731 11.7635 14.4603 11.4503C14.5204 11.4115 14.5887 11.3675 14.6539 11.3253C14.745 11.2666 14.8304 11.2115 14.8797 11.1795C15.0958 11.0441 16.5321 10.1807 16.549 10.1807C16.5575 10.1807 16.6889 10.1045 16.8456 10.0072C17.1464 9.82099 17.7523 9.46126 17.9726 9.33853C18.0446 9.30044 18.2226 9.19887 18.3624 9.11423C18.803 8.85184 19.7436 8.31013 20.5189 7.87423C20.9299 7.64569 21.3155 7.42139 21.3748 7.3833C21.4341 7.34098 21.6163 7.23518 21.7773 7.15054C21.934 7.06166 22.5526 6.71887 23.15 6.38876Z"
							/>
							<path d="M20.6122 14.1885C21.2054 14.3028 21.9129 14.798 22.2857 15.3608C22.5442 15.7459 22.6543 16.0464 22.7348 16.5585C22.8069 17.0367 22.8069 17.0621 22.7179 17.5488C22.5993 18.1709 22.3917 18.5772 21.9553 19.0216C21.5274 19.4617 21.0698 19.6945 20.4173 19.8003C19.6462 19.9272 18.9132 19.7664 18.2819 19.3348C17.8032 19.0046 17.4092 18.4672 17.2143 17.8704C17.1041 17.5446 17.0872 17.4261 17.0872 16.9817C17.0914 16.5416 17.1083 16.4231 17.2143 16.1141C17.3922 15.602 17.5659 15.3227 17.926 14.963C18.3116 14.5779 18.4641 14.4678 18.7099 14.379C18.8115 14.3451 18.9217 14.2986 18.9471 14.2732C19.0022 14.2309 19.4344 14.1462 19.7055 14.125C19.947 14.1039 20.3241 14.1335 20.6122 14.1885Z" />
							<path d="M31.272 14.1843C31.6449 14.2563 32.2338 14.5737 32.5473 14.8742C32.9964 15.3058 33.2718 15.7968 33.3904 16.3808C33.4964 16.8929 33.4964 17.1341 33.3862 17.6419C33.3015 18.0313 33.221 18.2175 32.9625 18.6492C32.793 18.937 32.3397 19.3179 31.9457 19.5083C31.4839 19.7326 31.3186 19.7749 30.8187 19.8088C29.4502 19.9061 28.3317 19.174 27.9122 17.9086C27.7978 17.5615 27.7809 17.4515 27.7809 17.0029C27.7809 16.5543 27.7978 16.4485 27.908 16.1226C28.1749 15.3609 28.5689 14.8699 29.268 14.4425C29.4036 14.3578 29.7764 14.2055 29.9162 14.1801C30.1662 14.1293 30.9882 14.1335 31.272 14.1843Z" />
							<path
								className="hidden sm:block"
								d="M69.2319 21.95L67.6479 23.048C67.9239 23.624 68.2959 24.158 68.7639 24.65C69.2319 25.142 69.7779 25.538 70.4019 25.838C71.0379 26.126 71.7279 26.27 72.4719 26.27C73.0119 26.27 73.5279 26.18 74.0199 26C74.5239 25.832 74.9739 25.592 75.3699 25.28C75.7659 24.956 76.0779 24.56 76.3059 24.092C76.5339 23.624 76.6479 23.096 76.6479 22.508C76.6479 21.956 76.5519 21.476 76.36 21.068C76.1799 20.66 75.9339 20.306 75.6219 20.006C75.3099 19.694 74.9619 19.436 74.578 19.232C74.2059 19.028 73.8339 18.86 73.4619 18.728C72.7899 18.488 72.2439 18.254 71.8239 18.026C71.4039 17.798 71.0919 17.558 70.8879 17.306C70.6959 17.042 70.5999 16.748 70.5999 16.424C70.5999 16.064 70.7379 15.752 71.0139 15.488C71.2899 15.212 71.7219 15.074 72.3099 15.074C72.7299 15.074 73.0959 15.158 73.4079 15.326C73.7319 15.482 74.0139 15.698 74.2539 15.974C74.4939 16.238 74.6919 16.526 74.8479 16.838L76.5759 15.866C76.3599 15.422 76.0599 14.996 75.676 14.588C75.304 14.18 74.8419 13.844 74.2899 13.58C73.7379 13.316 73.0899 13.184 72.3459 13.184C71.5899 13.184 70.9119 13.328 70.3119 13.616C69.7239 13.892 69.2559 14.288 68.9079 14.804C68.5599 15.308 68.3859 15.896 68.3859 16.568C68.3859 17.156 68.4999 17.66 68.7279 18.08C68.9559 18.488 69.2439 18.836 69.5919 19.124C69.9399 19.4 70.3059 19.634 70.6899 19.826C71.0739 20.006 71.4219 20.15 71.7339 20.258C72.2619 20.45 72.7239 20.648 73.1199 20.852C73.5279 21.044 73.8459 21.284 74.0739 21.572C74.3019 21.848 74.4159 22.22 74.4159 22.688C74.4159 23.18 74.2359 23.582 73.8759 23.894C73.5159 24.206 73.0479 24.362 72.4719 24.362C71.9919 24.362 71.5599 24.266 71.1759 24.074C70.7919 23.87 70.4379 23.588 70.1139 23.228C69.8019 22.856 69.5079 22.43 69.2319 21.95Z"
							/>
							<path
								className="hidden sm:block"
								d="M83.9938 20.222H92.9758V18.26H83.9938V20.222ZM91.6078 13.4V26H93.7318V13.4H91.6078ZM83.1478 13.4V26H85.2718V13.4H83.1478Z"
							/>
							<path
								className="hidden sm:block"
								d="M102.176 26H108.53V24.128H102.176V26ZM102.176 15.272H108.53V13.4H102.176V15.272ZM102.176 20.168H108.17V18.332H102.176V20.168ZM100.862 13.4V26H102.95V13.4H100.862Z"
							/>
							<path
								className="hidden sm:block"
								d="M116.978 22.76H123.638L123.224 20.96H117.374L116.978 22.76ZM120.272 16.964L122.27 21.644L122.324 22.166L124.034 26H126.428L120.272 12.698L114.116 26H116.51L118.256 22.058L118.292 21.59L120.272 16.964Z"
							/>
							<path
								className="hidden sm:block"
								d="M132.213 13.4V26H134.337V13.4H132.213ZM133.473 15.272H136.011C136.743 15.272 137.331 15.446 137.775 15.794C138.219 16.13 138.441 16.634 138.441 17.306C138.441 17.978 138.219 18.488 137.775 18.836C137.331 19.184 136.743 19.358 136.011 19.358H133.473V21.23H136.011C136.923 21.23 137.715 21.074 138.387 20.762C139.071 20.438 139.599 19.982 139.971 19.394C140.343 18.806 140.529 18.11 140.529 17.306C140.529 16.502 140.343 15.812 139.971 15.236C139.599 14.648 139.071 14.198 138.387 13.886C137.715 13.562 136.923 13.4 136.011 13.4H133.473V15.272Z"
							/>
							<path
								className="hidden sm:block"
								d="M149.531 19.988L153.545 26H156.101L151.835 19.988H149.531ZM146.939 13.4V26H149.063V13.4H146.939ZM148.199 15.236H150.737C151.217 15.236 151.637 15.32 151.997 15.488C152.369 15.656 152.657 15.896 152.861 16.208C153.065 16.52 153.167 16.904 153.167 17.36C153.167 17.804 153.065 18.188 152.861 18.512C152.657 18.824 152.369 19.064 151.997 19.232C151.637 19.4 151.217 19.484 150.737 19.484H148.199V21.23H150.827C151.739 21.23 152.531 21.068 153.203 20.744C153.887 20.42 154.415 19.964 154.787 19.376C155.159 18.788 155.345 18.098 155.345 17.306C155.345 16.514 155.159 15.83 154.787 15.254C154.415 14.666 153.887 14.21 153.203 13.886C152.531 13.562 151.739 13.4 150.827 13.4H148.199V15.236Z"
							/>
							<path
								className="hidden sm:block"
								d="M162.073 25.082C162.073 25.418 162.193 25.712 162.433 25.964C162.685 26.216 162.985 26.342 163.333 26.342C163.705 26.342 164.011 26.216 164.251 25.964C164.491 25.712 164.611 25.418 164.611 25.082C164.611 24.734 164.491 24.44 164.251 24.2C164.011 23.948 163.705 23.822 163.333 23.822C162.985 23.822 162.685 23.948 162.433 24.2C162.193 24.44 162.073 24.734 162.073 25.082Z"
							/>
							<path
								className="hidden sm:block"
								d="M173.405 19.7C173.405 18.8 173.603 18.02 173.999 17.36C174.407 16.688 174.935 16.172 175.583 15.812C176.243 15.44 176.957 15.254 177.725 15.254C178.325 15.254 178.865 15.332 179.345 15.488C179.825 15.644 180.257 15.86 180.641 16.136C181.037 16.4 181.379 16.7 181.667 17.036V14.516C181.139 14.084 180.569 13.754 179.957 13.526C179.345 13.298 178.577 13.184 177.653 13.184C176.729 13.184 175.865 13.34 175.061 13.652C174.269 13.964 173.579 14.414 172.991 15.002C172.403 15.59 171.941 16.286 171.605 17.09C171.281 17.882 171.119 18.752 171.119 19.7C171.119 20.648 171.281 21.524 171.605 22.328C171.941 23.12 172.403 23.81 172.991 24.398C173.579 24.986 174.269 25.436 175.061 25.748C175.865 26.06 176.729 26.216 177.653 26.216C178.577 26.216 179.345 26.102 179.957 25.874C180.569 25.646 181.139 25.316 181.667 24.884V22.364C181.379 22.7 181.037 23.006 180.641 23.282C180.257 23.546 179.825 23.756 179.345 23.912C178.865 24.068 178.325 24.146 177.725 24.146C176.957 24.146 176.243 23.966 175.583 23.606C174.935 23.234 174.407 22.712 173.999 22.04C173.603 21.368 173.405 20.588 173.405 19.7Z"
							/>
							<path
								className="hidden sm:block"
								d="M190.135 19.7C190.135 18.836 190.315 18.068 190.675 17.396C191.047 16.712 191.557 16.178 192.205 15.794C192.853 15.41 193.591 15.218 194.419 15.218C195.271 15.218 196.015 15.41 196.651 15.794C197.299 16.178 197.803 16.712 198.163 17.396C198.523 18.068 198.703 18.836 198.703 19.7C198.703 20.564 198.517 21.338 198.145 22.022C197.785 22.694 197.281 23.222 196.633 23.606C195.997 23.99 195.259 24.182 194.419 24.182C193.591 24.182 192.853 23.99 192.205 23.606C191.557 23.222 191.047 22.694 190.675 22.022C190.315 21.338 190.135 20.564 190.135 19.7ZM187.885 19.7C187.885 20.636 188.047 21.506 188.371 22.31C188.695 23.114 189.145 23.81 189.721 24.398C190.309 24.986 191.005 25.448 191.809 25.784C192.613 26.108 193.483 26.27 194.419 26.27C195.367 26.27 196.237 26.108 197.029 25.784C197.833 25.448 198.529 24.986 199.117 24.398C199.705 23.81 200.161 23.114 200.485 22.31C200.809 21.506 200.971 20.636 200.971 19.7C200.971 18.752 200.809 17.882 200.485 17.09C200.161 16.298 199.699 15.614 199.099 15.038C198.511 14.45 197.821 13.994 197.029 13.67C196.237 13.346 195.367 13.184 194.419 13.184C193.495 13.184 192.631 13.346 191.827 13.67C191.035 13.994 190.339 14.45 189.739 15.038C189.151 15.614 188.695 16.298 188.371 17.09C188.047 17.882 187.885 18.752 187.885 19.7Z"
							/>
							<path
								className="hidden sm:block"
								d="M209.696 18.332L213.53 24.83L217.364 18.332L218.246 26H220.442L218.714 12.77L213.53 21.32L208.364 12.77L206.636 26H208.832L209.696 18.332Z"
							/>
						</svg>
					</Link>
				</div>
				<form action="/search" className="bg-white flex items-center justify-start rounded-sm overflow-hidden">
					<input
						type="text"
						className="bg-transparent text-xs block px-4 py-2 outline-none focus:outline-none tracking-wider md:min-w-[320px]"
						placeholder="search"
					/>
					<button type="submit" className="bg-teal-400 text-teal-700 block p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
				</form>
			</div>
			<NavBar />
			<CategorySlider />
		</header>
	);
};

export default HeaderLayout;
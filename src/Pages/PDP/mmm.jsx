<Grid container>
<Grid sx={12} sm={12} md={6}>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      with: "57%",
      alignItems: "end",
      mx: "auto",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      <Typography variant="h1" gutterBottom>
        {product.title}
      </Typography>
    </Box>
    <Box sx={{ fontSize: "18px", mb: "40px" }}>
      {product.description}
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "40px",
        border: "1px solid black",
        p: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" gutterBotto sx={{ ml: "auto" }}>
        {count}
      </Typography>
      <Typography variant="h5" gutterBotto sx={{ ml: "40px" }}>
        Number
      </Typography>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ width: "40px", height: "40px" }}
        onClick={() => {
          console.log(setCount(count - 1));
        }}
      >
        <RemoveIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ width: "40px", height: "40px", ml: "20px" }}
        onClick={() => {
          console.log(setCount(count + 1));
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  </Box>
</Grid>
<Grid sx={12} sm={12} md={6} style={size}>
  <div>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((img, i) => (
        // <div className="swiper-zoom-container">
        <SwiperSlide key={i}>
          <img src={img} style={imgSize} />
        </SwiperSlide>
        // </div>;
      ))}
      ;
    </Swiper>
  </div>
</Grid>
</Grid>
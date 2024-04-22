const MyGame = {
    setup: () => ({
      tokens: {
        token1: { position: [100, 100], speed: 6 },
        token2: { position: [200, 200], speed: 6 },
      },
    }),
  
    moves: {
      walk: (G, ctx, tokenId, newPosition) => {
        moveToken(G, ctx, tokenId, newPosition, 'walk');
      },
  
      dash: (G, ctx, tokenId, newPosition) => {
        moveToken(G, ctx, tokenId, newPosition, 'dash');
      },
    },
  };
  
  function moveToken(G, ctx, tokenId, newPosition, action) {
    const token = G.tokens[tokenId];
    const [currentX, currentY] = token.position;
    const [newX, newY] = newPosition;
  
    const distance = Math.sqrt((newX - currentX) ** 2 + (newY - currentY) ** 2);
  
    const maxDistance = action === 'dash' ? token.speed * 2 : token.speed;
  
    if (distance <= maxDistance) {
      G.tokens[tokenId].position = newPosition;
    } else {
      console.log('Move exceeds maximum movement speed');
    }
  }
  
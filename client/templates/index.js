Template.Index.helpers({
    keywords: function () {
	l=Keywords.find({},{limit: 16}).fetch();
	k=[]
	for (i=0;i<4;i++) {
	    for (j=0;i<4;i++) {
		a=l.pop().name
		console.log(a)
		k.push([i,j,a])
	    }
	}
	return k.toString()
    },
});

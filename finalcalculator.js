<script>
		function finalGrade(){
		double wantedGrade;
		double examWorth;
		double needExam;
		double requiredGrade;
		double currentGrade;
		int weight;

		requiredGrade = (.100*wantedGrade-(.100-weight)*currentGrade)/weight;
		alert('To get ' + wantedGrade + ' you need ' + requiredGrade +' percent!');
	}
</script>